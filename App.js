import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {WriteTaktScreen} from './components/WriteTakt';
import {ReadTaktScreen} from './components/ReadTakt';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WriteTakt">
        <Stack.Screen name="WriteTakt" component={WriteTaktScreen} />
        <Stack.Screen name="WriteTakt" component={ReadTaktScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
