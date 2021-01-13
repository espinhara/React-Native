import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Title, Card, Paragraph, Appbar, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const Homen = (props) => {
  const logout = () => {
    // fazer logout
    auth()
  .signOut()
  .then(() => console.log('User signed out!'));
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Home" />
      </Appbar.Header>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Area logada</Title>
            <Paragraph>{props._user.email}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={logout}>
              Sair
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  card: {
    padding: 10,
  },
});

export default Homen;
