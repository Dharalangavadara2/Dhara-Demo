import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView, Linking, Modal, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';

const HomeDetail = ({ route, navigation }) => {  // Ensure 'navigation' is passed as a prop
  const [book, setBook] = useState(route.params?.data || {});
  
  useEffect(() => {
    setBook(route.params?.data);
    console.log("Route params:", route.params?.data);
  }, [route.params?.data]);

  if (!book) {
    return <Text>Loading...</Text>;
  }

  // Set up initial states
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [audio, setAudio] = useState(null);
  const [showProgressDialog, setShowProgressDialog] = useState(false); // For progress dialog

  // Set up audio playback when the component mounts
  useEffect(() => {
    const sound = new Sound(book.url_zip_file, null, (error) => {
      if (error) {
        console.log('Failed to load sound', error);
        return;
      }
      console.log('Sound loaded successfully');
    });

    setAudio(sound);
    return () => sound.release();
  }, [book]);

  const playPauseAudio = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play((success, error) => {
          if (success) {
            console.log('Audio finished playing');
          } else {
            console.log('Error playing audio', error);
          }
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audio) {
      const interval = setInterval(() => {
        audio.getCurrentTime((seconds) => {
          setProgress(seconds);
          // If progress reaches 100% (or close to it), show the progress dialog
          if (seconds >= audio.getDuration() * 0.99) {
            setShowProgressDialog(true); // Show dialog when 99% progress is reached
          }
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [audio]);

  const forward = () => {
    const newTime = progress + 10;
    if (newTime < audio?.getDuration()) {
      audio?.setCurrentTime(newTime);
      setProgress(newTime);
    }
  };

  const reverse = () => {
    const newTime = progress - 10;
    if (newTime >= 0) {
      audio?.setCurrentTime(newTime);
      setProgress(newTime);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Go Back Button */}
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Text style={styles.goBackText}>Go Back</Text>
      </TouchableOpacity>

      <Text style={styles.bookName}>{book?.title}</Text>
      {book?.authors && book?.authors.length > 0 && (
        <Text style={styles.author}>
          Author: {book?.authors[0]?.first_name} {book?.authors[0]?.last_name}
        </Text>
      )}
      <Text style={styles.description}>{book?.description}</Text>
      <Image source={{ uri: book?.coverImage || 'https://via.placeholder.com/150x200' }} style={styles.coverImage} />
      
      <Text>{`${Math.floor(progress / 60)}:${Math.floor(progress % 60)}`}</Text>

      <View style={styles.controls}>
        <Button title="<< 10s" onPress={reverse} />
        <Button title={isPlaying ? 'Pause' : 'Play'} onPress={playPauseAudio} />
        <Button title="10s >>" onPress={forward} />
      </View>

      <Text style={styles.link} onPress={() => Linking.openURL(book?.url_librivox)}>
        Listen on Librivox
      </Text>
      <Text style={styles.link} onPress={() => Linking.openURL(book?.url_text_source)}>
        Read the Text on Gutenberg
      </Text>

      {/* Progress Dialog */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showProgressDialog}
        onRequestClose={() => setShowProgressDialog(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Audio Finished Playing!</Text>
            <Button title="Close" onPress={() => setShowProgressDialog(false)} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  bookName: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  author: { fontSize: 18, color: '#888', marginVertical: 10, textAlign: 'center' },
  description: { fontSize: 14, color: '#333', marginVertical: 10, textAlign: 'justify' },
  coverImage: { width: 150, height: 200, borderRadius: 10, alignSelf: 'center', marginVertical: 20 },
  controls: { flexDirection: 'row', marginTop: 20, justifyContent: 'space-around', width: '80%' },
  link: { color: '#007BFF', textAlign: 'center', marginVertical: 10, fontSize: 14 },

  // Modal Styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },

  // Go Back Button Styles
  goBackButton: {
    position: 'absolute',
    top: 55,
    // right: 20,
    left:5,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  goBackText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeDetail;
