import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {LoginStackParamList} from '../components/LoginStack';
type Props = NativeStackScreenProps<LoginStackParamList, 'Welcome'>;
function WelcomeScreen({route, navigation}: Props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{width: '60%', alignSelf: 'center'}}>
        <Button
          onPress={() => {
            navigation.navigate('Login');
          }}
          mode="contained"
          style={{marginBottom: 50}}>
          Log in
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('Register');
          }}
          mode="contained">
          Register
        </Button>
      </View>
    </View>
  );
}

export default WelcomeScreen;
