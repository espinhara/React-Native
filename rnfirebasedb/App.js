import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import database from '@react-native-firebase/database';

const App: () => React$Node = () => {
  const [item , setItem] = useState('');
  useEffect(() => {
    database()
      .ref('/item')
      .set({
        text: 'set data',
        state: 'done'
      })
      .then(() => console.log('Data set.'));
  }, [])
  useEffect(() => {
    database()
  .ref('/item')
      .on('value', snapshot => {
        console.log('User data: ', snapshot.val()
        
        );
        setItem(snapshot.val())
        
      });
  },[])
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text>Hello World {item.text}: {item.state}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
