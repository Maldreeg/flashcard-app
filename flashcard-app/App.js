import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {
  Image, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity,
  ScrollView 
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import Flashcard from './flashcard';
import CarouselCards from './carouselCards';




const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
const what={frontContent: 'Alleniga1', backContent: 'Macaspac1'};



//searchbar

const SearchBar = () => {
  return (
    <View style={styles.Search}>
      <View style={styles.SearchBar}>
        <TextInput style={{width:'85%'}} placeholder='Search'/>
        <TouchableOpacity onPress={()=>{}}>

        </TouchableOpacity>  
      </View>
    </View>
  );
};

function Homepage() {
  const flashcards = [
    { question: 'SINO ANG POGI?', answer: 'vhilly :))' },
  ];
  return (
    <View style={styles.HomePageUI}>
      <Flashcard frontContent="alleniga" backContent="macasapac" />
    </View>
  );
}

function Profile() {
  return (
    <SafeAreaView style={styles.ProfileContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ProfileTitleBar}>
        </View>

        <View style={{ alignSelf: 'center' }}>
          <View style={styles.profileImage}>
      
            <Image source={require('./assets/vhilly.jpg')} style={styles.image} resizeMode="center" />
          </View>
        </View>

        <View style={styles.profileInfo}>
          <Text style = {[styles.Username,{fontWeight:'200',fontSize:26}]}>Vhilly Manalansang</Text>
          <Text style = {[styles.Username,{color:'#AEB5BC',fontSize:12}]}>manalansang.vhilly@ue.edu.ph</Text>
          <Text style = {[styles.Profileflashcard,{marginTop:32,fontSize:26,fontWeight:'bold'}]}>Flashcards</Text>
        </View>
     
      </ScrollView>
    </SafeAreaView>
  );
}

function Libraries(){
  const Flashcard = () => {
    return (
      <View style={styles.flashcardContainer}>
        <Flashcard frontContent="Alleniga2" backContent="Macaspac2" />
      </View>
    );
  };
}

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: ({ navigation }) => (
          <View style={styles.TopHeader}>
            <Text style={styles.headerText}>Grove Card</Text>
            <SearchBar />
          </View>
        ),
      }}
    >

      <Tab.Screen
        name="Home"
        component={Flashcard}
        initialParams={what}
      />
      <Tab.Screen name="Libraries" component={Libraries} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Carousel" component={CarouselCards} />
    </Tab.Navigator>
  );
}

function SignIn1({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    //ADMIN THINGZZZZ
    const user1 = 'vhilly';
    const pass1 = 'pogi';

    if (username === user1 && password === pass1) {
      alert('Login successful!');

      navigation.replace('Tabs');
    } else {
      
      alert('Invalid username or password');
    }
  };

  return (
    <View style={styles.SignInUI}>
      <View style={styles.LoginUI}>
        <Text style={styles.SignIn}>Sign In</Text>

        <View style={styles.Component1}>
          <TextInput
            style={styles.Username1}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            placeholderTextColor="rgba(0,0,0,0.45)"
          />
        </View>

        <View style={styles.Component1}>
          <TextInput
            style={styles.Password1}
            placeholder="Password"
            value={password}
            placeholderTextColor="rgba(0,0,0,0.45)"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.LoginButton} onPress={handleLogin}>
        <Text style={styles.LogIn}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}


//NAVIGATIONZZZ
const App=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignIn1} />
      <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


//stylesheet
const styles = StyleSheet.create({
  flashcardContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsContainer:{
    flex:1,
    backgroundColor:'#FFF'
  },
  settingsText:{
    color:'#161924',
    fontSize:20,
    fontWeight:"500"
  },

  // profile tab flash card 
  Profileflashcard:{
    alignItems:'center',
    flex:1
},
  //profile info container
  profileInfo:{
    alignSelf:'center',
    alignItems:'center',
    marginTop:16
  },

  //image container
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    aspectRatio:1,
  },
  //profile image sizes
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    marginTop:34,

  },
  ProfileTitleBar:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:24,
    marginHorizontal:16
  },
  //profilecontainer
  ProfileContainer:{
    flex:1,
    backgroundColor:'#fff'
  }, 
  //topNavigationHeader
  TopHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 25,
    backgroundColor: 'green', 
  },
  
  headerText: {
    fontSize: 20,
    color: 'white', 
    fontWeight: 'bold',
  },

 Search:{
  flex:1,
  justifyContent:'center',
  alignItems:'center' 
 },
 SearchBar:{
  width:300,
  height:50,
  backgroundColor:'#CDCDCD',
  borderRadius:10,
  flexDirection:'row',
  alignItems:'center'
 },
  //homescreen
 HomePageUI:{
  flex: 1, 
  alignItems: 'center', 
  justifyContent: 'center'
 }, 
 //profle
 ProfileUI:{
  flex: 1, 
  alignItems: 'center', 
  justifyContent: 'center'
 }, 
 //library
 LibraryUI:{
  flex: 1, 
  alignItems: 'center', 
  justifyContent: 'center'
 }, 
SignInUI: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  width: '100%',
  height: 0,
  padding: 10,
  borderWidth: 2, 
  borderColor: "rgba(0,0,0,0.71)",
  margin: 35,
  },
  //LOGIN UI
  LoginUI: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "80%",
    boxSizing: "border-box",
    
  },
  //font
  SignIn: {
    color: "rgba(0,0,0,1)",
    fontSize: "21px",
    lineHeight: "21px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
  },
  // username/password componejnt
  Component1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
  },

  Username1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 49,
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.45)",
    boxSizing: "border-box",
    marginVertical: 10,
  },
  //font
  Username: {
    color: "rgba(0,0,0,1)",
    fontSize: "21px",
    lineHeight: "26px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
  },
  Password1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 49,
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.45)",
    boxSizing: "border-box",
    marginVertical: 10, 

  },
  //font
  Password: {
    color: "rgba(0,0,0,1)",
    fontSize: "21px",
    lineHeight: "21px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
  },
  //style for login buttom
  LoginButton: {
    width: "25%",
    alignItems: "center",
    height: 45,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    boxSizing: "border-box",
    backgroundColor: "rgba(217,217,217,1)",
    
  },
  //font
  LogIn: {
    color: "rgba(0,0,0,1)",
    fontSize: "21px",
    lineHeight: "21px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
  },
})

export default App;