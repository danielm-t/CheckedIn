import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

function HomeScreen() {
  return (
    <View>
      <Button
        mode="contained"
        onPress={() => {
          auth()
            .signOut()
            .then(() => console.log('User signed out!'));
        }}>
        Log Out
      </Button>
    </View>
  );
}

export default HomeScreen;
