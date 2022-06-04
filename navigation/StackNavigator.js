import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTab';
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={BottomTab} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
