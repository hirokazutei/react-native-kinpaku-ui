/* @flow */
import * as React from 'react';
import {StyleSheet, View} from 'react-native';

const Provider = ({
  backgroundColor,
  story,
}: {
  backgroundColor?: string;
  story: () => React.ReactElement;
}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor,
        padding: 40,
      }}>
      {story()}
    </View>
  );
};
export default Provider;
