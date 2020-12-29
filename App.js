import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainScreen from './screens/MainScreen';
import ColoursScreen from './screens/ColoursScreen';
import SquareScreen from './screens/SquareScreen';


const switchNavigator = createSwitchNavigator({
  flow: createStackNavigator ({
    MainScreen: MainScreen,
    ColoursScreen: ColoursScreen,
    SquareScreen: SquareScreen
  })
}); 

const App = createAppContainer(switchNavigator); 

export default App;