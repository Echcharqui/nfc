import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ReadTaktScreen = () => {
  return (
    <View style={styles.center}>
      <Text>Read Takt Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
