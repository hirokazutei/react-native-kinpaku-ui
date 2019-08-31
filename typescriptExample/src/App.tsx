import React, {Fragment} from 'react';
import {View} from 'react-native';
import {UIFactory} from './Theme';
import {buttonSizeKeys} from './Button/constants';
import {DEFAULT_BUTTON_SIZES} from './Button/constants';
import Stack from './Stack';

const themes = {
  test: {
    primary: 'yellow',
    secondary: 'yellow',
    tertiary: 'yellow',
    disabled: 'black',
    background: 'white',
    text: 'black',
  },
  default: {
    primary: '#88EEBB',
    secondary: '#55AADD',
    tertiary: '#116688',
    disabled: 'black',
    background: 'white',
    text: 'black',
  },
};

const App = () => {
  const {Sharp, Round, Circular} = UIFactory<typeof themes>(themes);

  return (
    <Fragment>
      <View style={{paddingVertical: 40, flexDirection: 'row'}}>
        <View>
          {buttonSizeKeys.map((size: keyof typeof DEFAULT_BUTTON_SIZES) => {
            console.log(size);
            return (
              <>
                <Sharp title="EXAMPLE" size={size} onPress={() => {}} />
                <Stack size="small" />
              </>
            );
          })}
        </View>
        <View>
          {buttonSizeKeys.map((size: keyof typeof DEFAULT_BUTTON_SIZES) => {
            console.log(size);
            return (
              <>
                <Sharp
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
          console.log(size);
          return (
            <>
              <Sharp
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
    </Fragment>
  );
};

export default App;
