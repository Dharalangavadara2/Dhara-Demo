import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Modal, TouchableWithoutFeedback, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromReadingList, editReadingList } from '../redux/reducer';
import { FontName } from '../res/styles/FontName';
import CustomTextInput from '../res/styles/CustomeTextInput';
import Clickable from '../res/styles/Clickable';
import _ from "lodash";
import Utils from '../res/styles/Utils';
import Button from '../res/styles/Button';
import { navigate } from './Navigation';
import axios from 'axios';


const Login = () => {
  const readingList = useSelector((state) => state.books.readingList);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, SETpassword] = useState('')
  const [passwordError, setpasswordError] = useState('')
  



  const onSubmitClicked = async () => {

    
     if (Utils.isEmpty(email.trim())) {
     
      setEmailError('Enter Email')
    }
    else if (
      email.trim() &&
      !Utils.validateEmail(email.trim())
    ) {
      setEmailError('Enter Valid Email')
    }
    else if (
      Utils.isEmpty(password)
    ) {
        setEmailError('')
      setpasswordError('Enter Password')
    }

    

    else {
      setEmailError('')
      setpasswordError('')
      let data = await login(email,password)

    //   supposs getting token from login apis 
    const token = data.token; 

      console.log("here comes....");


    }
  };
  const login = async (email, password) => {
    try {
      const response = await axios.post('http://3.7.81.243/projects/plie-api/public/api/login', {
        email: email,
        password: password
      });
  
      // Handle the response here
      console.log('Login Success:', response.data);
  
      // Return the response (e.g., token) if necessary
      return response.data;
    } catch (error) {
      console.error('Login Error:', error.response ? error.response.data : error.message);
      throw error;
    }
  };
  

  




  return (
    <ScrollView style={styles.container}>
      <ImageBackground style={{
        // flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 294
        // paddingStart: 20,
        // paddingEnd: 16,
        // paddingVertical: 15,
      }} source={require('../res/images/Signup.png')}
        resizeMode={"cover"}>
        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
          <Image style={{ width: 180, height: 250 }} resizeMode={"cover"} source={require('../res/images/signupuser.png')}>
          </Image>
        </View>
      </ImageBackground>
      <View style={{
        marginTop: 10,
        // backgroundColor: Colors.Defawhite,
        // flexDirection: 'row',
        // alignItems: 'center',
        marginLeft: 18,
        // backgroundColor:"red"
      }}>
        <Text style={{
          fontFamily: FontName.extraBold
          ,
          fontSize: 36,
          color: '#3F444D',
        }}>Login</Text>
      </View>
      <View style={{ padding: 10 }}>
        <CustomTextInput
          isOptional={true}
          value={email} error={emailError} label={'Email'}
          style={{
            marginTop: 10,
          }} inputType={"email-address"}
          onChangeText={(text) => setEmail(text)} />
      </View>
      <View style={{ padding: 10 }}>
        <CustomTextInput
          isOptional={true}
          value={password} error={passwordError} label={'Password'}
          style={{
            marginTop: 10,
          }} inputType={'password'}
          onChangeText={(text) => SETpassword(text)} />
      </View>

     {Utils.validateEmail(email) ?  <View style={{padding:10}}>
        <Clickable onPress={() => navigate("ForgotPassword",{data:email})}>
        <Text style={{
            fontFamily: FontName.light, // Replace with actual font name
            fontSize: 20,
            textAlign: 'right',
            // marginTop: 10,
            marginLeft:5,
            flexDirection: 'row',
            color: '#314FA4',
        }}>Forgot password?</Text>
        </Clickable>
      </View> : undefined}
     
     
     

      <Button
        onPress={onSubmitClicked}
        disabled={false}
        title={'Login'} style={{
          marginTop: 20,
          marginBottom: 5,
          marginHorizontal: 16,

        }} />

     
      {/* <View style={{
        marginTop: 10,
        justifyContent:"center",
        alignItems:"center"
        // backgroundColor:
      }}>
        <Text style={styles.text}>
          Already have an account? {" "}
          <Text
            style={{
              fontFamily: FontName.light, // Replace with actual font name
              fontSize: 20,
              textAlign: 'center',
              // marginTop: 10,
              marginLeft:5,
              flexDirection: 'row',
              color: '#409AEF',
            }}
            onPress={() => {
              navigate('Login');
            }}
          >
             Login
          </Text>
        </Text>
      </View> */}



    </ScrollView>
  );
};

export default Login;
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
