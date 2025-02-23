import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Modal, TouchableWithoutFeedback, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromReadingList, editReadingList, addToReadingList } from '../redux/reducer';
import { FontName } from '../res/styles/FontName';
import CustomTextInput from '../res/styles/CustomeTextInput';
import Clickable from '../res/styles/Clickable';
import _ from "lodash";
import Utils from '../res/styles/Utils';
import Button from '../res/styles/Button';
import { navigate } from './Navigation';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../res/styles/Colors';
import ContactListItem from './ContactListItem';


const Home = () => {
  console.log("hwllo");
  
  const dispatch = useDispatch();

 const [data,setData] = useState([])

  useEffect(() => {
    fetchEventListing()
    
  },[])
  



  
  


const fetchEventListing = async () => {
  console.log("Fetching data...");

  try {
    const response = await axios.get('https://librivox.org/api/feed/audiobooks?format=json&limit=100');
    
    // console.log("Result:", response.data);

    // Assuming setData is a state-setting function (React example)
    setData(response.data?.books);
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error gracefully, you can set error data or fallback data
    setData([]);
  }
};
const redirectDetails = (data:any) => {
  console.log("yes data comes ....",data);
  if(data){
    navigate('HomeDetail',{data})
  }
  

}

  
  

  




  return (
    <ScrollView style={[styles.container,{padding:10,backgroundColor:"#F2F2F2"}]}>
     
              <View>

              <FlatList
                                data={data}
                                extraData={data}
                                style={{ marginTop:20}}
                                keyboardShouldPersistTaps={"handled"}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item, index }) => {
                                    
                                    return (
                                        <ContactListItem                 
                                        onPress={(data: any) => redirectDetails(data)}
                                        item={item} />)
                                }}
                                keyExtractor={(_item, index) => "key" + index}
                            />
              </View>
     
     
     

   


    </ScrollView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
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
