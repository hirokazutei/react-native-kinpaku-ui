import React from 'react';
import {View} from 'react-native';
import {UIFactory} from './components/Theme';
import {buttonSizeKeys} from './components/Button/constants';
import {DEFAULT_BUTTON_SIZES} from './components/Button/constants';
import themes from './themes';
import Stack from './components/Stack';
import Inset from './components/Inset';

const App = () => {
  const {Sharp, Round, Circular} = UIFactory<typeof themes>(themes);

  return (
    <Inset vertical="massive">
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View>
          {buttonSizeKeys.map((size: keyof typeof DEFAULT_BUTTON_SIZES) => {
            return (
              <>
                <Round title="EXAMPLE" size={size} onPress={() => {}} />
                <Stack size="small" />
              </>
            );
          })}
        </View>
        <View>
          {buttonSizeKeys.map((size: keyof typeof DEFAULT_BUTTON_SIZES) => {
            return (
              <>
                <Round
                  title="EXAMPLE"
                  color="secondary"
                  size={size}
                  type="clear"
                  onPress={() => {}}
                />
                <Stack size="small" />
              </>
            );
          })}
        </View>
      </View>
      <View>
        {buttonSizeKeys.map((size: keyof typeof DEFAULT_BUTTON_SIZES) => {
          return (
            <>
              <Circular
                title="EXAMPLE"
                color="tertiary"
                size={size}
                type="outline"
                onPress={() => {}}
              />
              <Stack size="small" />
            </>
          );
        })}
      </View>
    </Inset>
  );
};

export default App;
