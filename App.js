import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {WriteTaktScreen} from './components/WriteTakt';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WriteTakt">
        <Stack.Screen name="WriteTakt" component={WriteTaktScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
