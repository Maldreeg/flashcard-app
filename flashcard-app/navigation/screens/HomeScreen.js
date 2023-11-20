import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
 return (
    <View style={styles.container}>
      <Text style={[styles.l1, { position: 'absolute', top: 20, left: 10 }]}>Hello, there!</Text>
      <Text style={[styles.l2, { position: 'absolute', top: 50, left: 10 }]}>What do you want to learn today?</Text>
      <View style={styles.c2}>
        <Text style={styles.c2l1}>Plant seeds of wisdom one flashcard at a time!</Text>
        <TouchableOpacity style={styles.c2l2}>
          <Text>Click me!</Text>
        </TouchableOpacity>
      </View>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#4F6F52',
    alignItems: 'center',
    justifyContent: 'center',
 },
 l1: {
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 5,
 },
 l2: {
    fontSize: 12,
    marginBottom: 15,
    color: '#FFFFFF'
 },
 c2: {
    backgroundColor: '#ECE3CE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
 },
 c2l1: {
    fontSize: 14,
    marginRight: 10,
 },
 c2l2: {
    backgroundColor: '#007bff',
    paddingHorizontal: 10,
    paddingVertical: 50,
    borderRadius: 5,
 },
});

export default App;