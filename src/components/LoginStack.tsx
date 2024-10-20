import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
export type LoginStackParamList = {
  Login: undefined;
  Welcome: undefined;
  Register: undefined;
};
function LoginStack() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          options={{orientation: 'portrait'}}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="Login"
          options={{orientation: 'portrait'}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          options={{orientation: 'portrait'}}
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoginStack;
