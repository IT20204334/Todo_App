import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { firebase } from "./config";
import Home from './Screens/Home';
import Detail from './Screens/Detail';
import Login from './Screens/Login';
import Header from './component/Header';
import React, { useState,useEffect } from 'react';
import Registration from './Screens/Registration';

const Stack = createStackNavigator();

function App(){

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  
  
  function onAuthStateChanged(user){
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if(initializing) return null;

  if (!user){
    return(
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: () => <Header name="My Todo App" />,
            headerStyle: {
              height: 120,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#3a5c84",
              shadowColor: "#000",
              elevation: 25,
              
            },
          }}
        />

<Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerTitle: () => <Header name="Todo" />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#00e4d0",
              shadowColor: "#000",
              elevation: 25,
            },
          }}
        />
      </Stack.Navigator>
    );
  }
  
  return(
    
   
      <Stack.Navigator 
      //screenOptions={{headerShow: false}}
      >

<Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Header name="Home" />,
          headerStyle: {
            height: 120,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#3a5c84",
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />

<Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerTitle: () => <Header name="Todo" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#3a5c84",
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />
      </Stack.Navigator>
  );
      }

      



export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};


