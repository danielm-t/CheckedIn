import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';
import useFirebaseLogin from './src/components/FirebaseLogin';
import LoginStack from './src/components/LoginStack';
import UserStack from './src/components/UserStack';

export default function App() {
  const {user, initializing} = useFirebaseLogin();

  if (initializing) {
    return <Text>Loading...</Text>;
  }

  return <View style={{flex: 1}}>{user ? <UserStack /> : <LoginStack />}</View>;
}
