import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {User} from '../assets/User';

function useFirebaseLogin() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  function onAuthStateChanged(firebaseUser: any) {
    if (firebaseUser) {
      setUser({
        name: firebaseUser.displayName || 'Anonymous',
        email: firebaseUser.email || '',
      });
    } else {
      setUser(null);
    }
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // Unsubscribe on unmount
  }, []);

  return {user, initializing};
}

export default useFirebaseLogin;
