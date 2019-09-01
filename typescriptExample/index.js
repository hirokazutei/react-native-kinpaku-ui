import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import StorybookUIRoot from './storybook/storybook';

AppRegistry.registerComponent(appName, () => StorybookUIRoot);
