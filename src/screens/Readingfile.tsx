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


const ReadingList = () => {
  const readingList = useSelector((state) => state.books.readingList);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [lname, setlname] = useState('')
  const [lnameError, setlnameError] = useState('')
  const [Fname, setFname] = useState('')
  const [FnameError, setFnameError] = useState('')
  const [password, setpassword] = useState('')
  const [passwordError, passwordErrorError] = useState('')
  const [checked, setchecked] = useState<boolean>(false)



  const onSubmitClicked = () => {

    if (Utils.isEmpty(Fname.trim())) {
      setFnameError("Enter First Name")
    } else if (Utils.isEmpty(lname.trim())) {
      setlnameError('Enter Last Name')
      setFnameError('')
    }
    else if (Utils.isEmpty(email.trim())) {
      setFnameError('')
      setlnameError('')
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
      setFnameError('')
      setlnameError('')
      setEmailError('')
      passwordErrorError('Enter Password')
    }

    // else if (this.state.operatorList.length > 0 && this.state.selectedOperator == undefined) {
    //   this.setState({ operatorError: Strings.validation_operator })
    // }

    else {
      passwordErrorError('')
      navigate('OtpVerification')
      console.log("here comes....");




      // if (this.state.selectedOperationalArea) {
      //   const selectedOperationalArea: OperationalAreaModel =
      //     this.state.selectedOperationalArea;
      //   params.company_uuid = selectedOperationalArea.company_uuid !== null ? selectedOperationalArea.company_uuid : undefined;
      //   console.log(
      //     "change company_uuid",
      //     selectedOperationalArea.company_uuid
      //   );
      // }

      // ProgressDialog.show();



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
        }}>Sign Up</Text>
      </View>
      <View style={{ padding: 10 }}>
        <CustomTextInput
          isOptional={true}
          value={Fname} error={FnameError} label={'First Name'}
          style={{
            marginTop: 10,
          }} inputType={"email-address"}
          onChangeText={(text) => setFname(text)} />
      </View>
      <View style={{ padding: 10 }}>
        <CustomTextInput
          isOptional={true}
          value={lname} error={lnameError} label={'Last Name'}
          style={{
            marginTop: 10,
          }} inputType={"email-address"}
          onChangeText={(text) => setlname(text)} />
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
          }} inputType={"email-address"}
          onChangeText={(text) => setpassword(text)} />
      </View>
      <View style={{
        flexDirection: 'row', alignItems: 'center',
        marginTop: 16, marginLeft: 20
      }}>
        <View style={{ borderWidth: checked ? 1 : 0, marginLeft: 8 }}>
          <TouchableOpacity onPress={() => { setchecked(!checked) }}>
            <Image
              style={{ width: 20, height: 20 }}
              source={checked ? require('../res/images/ic_CheckmarkBlackIcon.png') : require('../res/images/ic_CheckBoxUnSelectedIcon.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{ paddingLeft: 8 }}>
          <Text style={{
            fontFamily: FontName.light,
            fontSize: 16,
            color: '#757575',
            textAlign: 'center',
          }}>{' By clicking here you are agreed to our'}</Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            {/* <Text style={{
               fontFamily: FontName.light,
               fontSize: 16,
               color: '#757575',
               textAlign: 'center',
            }}>{'the'}</Text> */}

            <Text style={{
              fontFamily: FontName.light,
              fontSize: 16,
              color: '#409AEF',
              textAlign: 'center',
              // textDecorationLine: 'underline',
              textDecorationColor: '#409AEF',
              textDecorationStyle: 'solid',
              marginHorizontal: 4,
              textDecorationLine: "underline"
            }}>
              {'Terms & Conditions'}
            </Text>


          </View>
        </View>

      </View>

      <Button
        onPress={onSubmitClicked}
        disabled={!checked}
        title={'Sign up'} style={{
          marginTop: 20,
          marginBottom: 5,
          marginHorizontal: 16,

        }} />

      <Text style={{
        fontFamily: FontName.light,
        fontSize: 16,
        //  color: '#409AEF',
        textAlign: 'center',
        // textDecorationLine: 'underline',

      }}>We will share OTP to your Email ID for authentication</Text>
      <View style={{
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
              console.log("yes calllign...");
              
              navigate('Login');
            }}
          >
             Login
          </Text>
        </Text>
      </View>



    </ScrollView>
  );
};

export default ReadingList;
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
