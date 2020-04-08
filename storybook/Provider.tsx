/* @flow */
import * as React from 'react';
import {View} from 'react-native';
import themes from '../src/themes';

const Provider = ({
  backgroundColor = themes.default.background,
  story,
}: {
  backgroundColor?: string;
  story: () => React.ReactElement<null>;
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
