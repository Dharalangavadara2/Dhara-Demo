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
  const dispatch = useDispatch();

 const [data,setData] = useState([])

  useEffect(() => {
    fetchEventListing()
    
  },[])
  



  
  

  const fetchEventListing = async (token:any) => {
    const url = 'http://3.7.81.243/projects/plie-api/public/api/events-listing';
  
    try {
      const response = await axios.post(url, {}, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      // console.log("response...",response.data?.data);
      setData(response.data?.data?.events)

      // return response.data?.data?.events
      
  
       // Handle success
    } catch (error) {
      console.error('Event Listing error:', error);
      throw error; // Handle error
    }
  };
  

  




  return (
    <ScrollView style={[styles.container,{padding:10,backgroundColor:"#F2F2F2"}]}>
      <View
                style={{
                  // marginStart: 13,
                  // width: 250,
                  borderWidth:1,
                  justifyContent:"center",
                  // padding:15,
                  height:100,
                  paddingHorizontal:30
                  // flex:0.5,
                  // alignItems:"center"
                }}
              >
                
                <Text style={{
                   fontFamily: FontName.semibold,
                   fontSize: 20,
                   color: Colors.ButtonColor,
                }}>
                  {'Hello Renzo!'}
                </Text>
                <Text style={{
                  fontFamily: FontName.regular,
                  fontSize: 16,
                  marginTop: 4,
                  color: Colors.TextColor,
                }}>
                  {'Are you ready to dance?'}
                </Text>
              </View>

              <View>

              <FlatList
                                data={data}
                                extraData={data}
                                style={{ marginTop:20}}
                                keyboardShouldPersistTaps={"handled"}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item, index }) => {
                                    
                                    return (
                                        <ContactListItem  item={item} />)
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
