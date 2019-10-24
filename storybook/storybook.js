import {AppRegistry} from 'react-native';
import {getStorybookUI, configure} from '@storybook/react-native';
import {loadStories} from './storyLoader';

// import stories
configure(() => {
  loadStories();
}, module);

const StorybookUI = getStorybookUI({port: 7007, onDeviceUI: true});
AppRegistry.registerComponent('KinpakuUI', () => StorybookUI);
export default StorybookUI;
