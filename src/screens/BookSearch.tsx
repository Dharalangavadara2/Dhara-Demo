import React, { useState } from 'react';
import { View, Text, Button, FlatList, TextInput, Modal, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromReadingList, editReadingList } from '../redux/reducer';

const BookSearch = () => {
  const readingList = useSelector((state) => state.books.readingList);
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [editedItem, setEditedItem] = useState(null);

  const handleEdit = (item) => {
    setEditedItem(item);
    setModalVisible(true);
  };

  const saveEditedItem = () => {
    if (editedItem) {
      dispatch(editReadingList({ book: editedItem }));
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Reading List:</Text>
      <FlatList
        data={readingList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
         <View style={styles.itemContainer}>
        <Image
        source={{ uri: item.volumeInfo.imageLinks?.thumbnail }}
        style={styles.bookImage} 
      />
            <Text>{item.volumeInfo.title}</Text>
            <Text>{item.volumeInfo.authors}</Text>
            <View style={styles.buttonContainer}>     
              <Button title="Edit" onPress={() => handleEdit(item)} />
              <Button
                title="Remove"
                onPress={() => dispatch(removeFromReadingList(item))}
              />     
              </View>
            </View>
          );
        }}
      />

      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View>
          <Text>Edit Item:</Text>
          <TextInput
            value={editedItem?.volumeInfo.title}
            onChangeText={(text) =>
              setEditedItem({ ...editedItem, volumeInfo: { ...editedItem.volumeInfo, title: text } })
            }
          />
          <View style={styles.buttonContainer}>   
          <Button title="Save" onPress={saveEditedItem} />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
        </View>
      </Modal>
    </View>
  );
};

export default BookSearch;
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
      fontSize: 18,
      marginVertical: 10,
    },
    itemContainer: {
      borderWidth: 1,
      marginVertical: 10,
      padding: 10,
      marginHorizontal: 10,
      borderRadius: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      marginVertical: 10,
      justifyContent: 'space-evenly',
    },
    bookImage: {
        width: 100, 
        height: 150,
        borderRadius: 10,
        marginBottom: 10, 
      },
  });
  