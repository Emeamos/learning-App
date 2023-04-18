import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/homeScreen';
import TopicScreen from './src/screens/topicScreen';
import TopicInfoScreen from './src/screens/topicInfoScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Topics" component={TopicScreen} />
        <Stack.Screen name="Topic Info" component={TopicInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
