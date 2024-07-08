// import {registerRootComponent} from 'expo';
// import YourApp from './App';

// registerRootComponent(YourApp);

/**
 * @format
 */

import 'react-native-reanimated';
import {AppRegistry} from 'react-native';
import YourApp from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => YourApp);
