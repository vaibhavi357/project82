import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";
const Tab = createMaterialBottomTabNavigator();

const = () => {
  return(
          <Tab.Navigator
          screenOptions={({route})} =>({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if(route.name === 'Feed'){
                iconName = focused ? 'book' : 'book-outline';
              } else if(route.name === 'Create Post'){
                iconName = focused ? 'create' : 'create-outline';
              }

              return <Ionicons name={iconName} size={size} color={color}/>;
            }
          })

          tabBarOptions=({
            activeTintColor : 'tomato',
            iactiveTintColor: 'gray'
          })
        >

        <Tab.Screen name="Feed" component={Feed}/>
        <Tab.Screen name="CreatePost" component={CreatePost}/>

          </Tab.Navigator>
        )
}


const styles = StyleSheet.create({
  container{
    flex:1,
    backgroundColor: 'black'
  },
  droidSafeArea{
    marginTop:platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle{
    flex:0.07,
    flexDirection:"row"
  },
  appIcon{
    flex:0.2,
    justifyContent:"center",
    alignItems:"center"
  },
  iconImage{
    width:"100%",
    height:"100%";
    resizeMode:"contain"
  },
  appTitleTextContainer{
    flex:0.8,
    justifyContent:"center"
  },
  appTitleText{
    color:"white",
    fontSize:RFValuue(28)
  },
  cardContainer{
    flex:0.85
  }
})


export default BottomTabNavigator;
