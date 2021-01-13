import 'react-native-gesture-handler';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';

import {WriteTaktScreen} from './components/WriteTakt';
import {ReadTaktScreen} from './components/ReadTakt';

const Tab = createMaterialTopTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Write" component={WriteTaktScreen} />
        <Tab.Screen name="Read" component={ReadTaktScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
