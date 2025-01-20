import React from 'react';
import BookSearch from './src/screens/BookSearch';
import ReadingList from './src/screens/Readingfile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Splash from './src/screens/Splash';
import { navigationRef } from './src/screens/Navigation';
import OtpVerification from './src/screens/OtpVerification';
import OtpSucess from './src/screens/OtpSucess';
import Login from './src/screens/Login';
import ForgotPassword from './src/screens/ForgotPassword';
import ResetPassword from './src/screens/ResetPassword';

const Stack = createNativeStackNavigator();
const App = () => {

    return (
      <Provider store={store}>
        
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator  initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name ="Splash" component={Splash} />
          <Stack.Screen name="BookSearch" component={BookSearch} />
          <Stack.Screen name="ReadingList" component={ReadingList} />
          <Stack.Screen name="OtpVerification" component={OtpVerification} />
          <Stack.Screen name='OtpSucess' component={OtpSucess} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
          <Stack.Screen name='ResetPassword' component={ResetPassword} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    );
  
};

export default App;

