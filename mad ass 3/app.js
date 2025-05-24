import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [userName, setUserName] = useState("User");

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" children={() => <HomeScreen />} />
        <Tab.Screen name={userName} children={() => <ProfileScreen userName={userName} setUserName={setUserName} />} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
