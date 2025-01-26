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


const Login = () => {
  const readingList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, SETpassword] = useState('')
  const [passwordError, setpasswordError] = useState('')
  const [showPassword,setShowPassword]= useState(false)

  useEffect(() => {
    console.log("readingListreadingList",readingList);
    
    setShowPassword(showPassword)
  },[showPassword])
  



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
      console.log("data....",data?.data)
      

      if(data?.data?.token){
        await AsyncStorage.setItem('token', data?.data?.token);

        navigate('TabMain')
        // let list = await fetchEventListing()
        // if(list?.data?.events)
        // console.log("here comes lis..",list?.data?.events);
        


      }
      else{
        Utils.showErrorToast(data?.data?.message || 'User does not exits')
      }
      

    //   supposs getting token from login apis 
    const token = data.token; 

      console.log("here comes....");


    }
  };
  const login = async (email:string, password:any) => {
    const url = 'http://3.7.81.243/projects/plie-api/public/api/login';
    
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    console.log("formadat...",formData);
    
  // return
    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      return response.data; // Handle success (you can return whatever data you need from the response)
    } catch (error) {
      console.error('Login error:', error);
      throw error; // Handle error (you can customize this as per your requirement)
    }
  };

  const fetchEventListing = async (token:any) => {
    const url = 'http://3.7.81.243/projects/plie-api/public/api/events-listing';
  
    try {
      const response = await axios.post(url, {}, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      return response.data; // Handle success
    } catch (error) {
      console.error('Event Listing error:', error);
      throw error; // Handle error
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
          value={email} error={emailError} label={'email@email.com'}
          style={{
            marginTop: 10,
          }} inputType={"email-address"}
          onChangeText={(text) => setEmail(text)} />
      </View>
      <View style={{ padding: 10 }}>
        <CustomTextInput
          isOptional={true}
          rightIcon={showPassword ? require('../res/images/Eye.png') : require('../res/images/Eyeclose.png')}
          // rightIcon={require('../res/images/Signup.png')}
          autoCapitalize='none'

          onRightClick={() => {
            setShowPassword(!showPassword)
            console.log('djbfvbfj',showPassword);
            

          }}
          value={password} error={passwordError} label={'Password'}
          style={{
            marginTop: 10,
          }}
          password={!showPassword}
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
        title={'Sign in'} style={{
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
      <View style={{flex:1,flexDirection:"row",
        marginTop:25,
        justifyContent:"center",alignItems:"center",paddingHorizontal:35}}>
        <View style={{borderWidth: 0.5,
    height: 1,flex:1,
    borderColor: "#4F4F4F",}}></View>
        <Text style={{
          textAlign:"center",
          color:"#4F4F4F",
          fontFamily:FontName.regular,
          margin:5
        }}>or Sign In with:</Text>
        <View style={{borderWidth: 0.5,
    height: 1,flex:1,
    borderColor: "#4F4F4F",}}></View>
      </View>
      {/* <View style={{flex:1,flexDirection:"row",marginTop:23}}> */}
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1,flexDirection:"row",marginTop:25 }}>
        {/* <View style={{flex:1,borderWidth:0.3,shadowColor:"black",borderColor:"white"}}> */}
          <Image style={{ width: 50, height: 50,marginRight:13 }} resizeMode={"cover"} source={require('../res/images/Google.png')}>
          </Image>
          <Image style={{ width: 50, height: 50,marginRight:13 }} resizeMode={"cover"} source={require('../res/images/iphones.png')}>
          </Image>
          <Image style={{ width: 48, height: 48,marginTop:5 }} resizeMode={"cover"} source={require('../res/images/facebooks.png')}>
          </Image>  
          {/* </View> */}
        {/* </View> */}

      </View>



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
