/**
 * Main navigation configuration for the React Native app.
 * Uses react-navigation for screen management and navigation.
 * 
 * Navigation Structure:
 * - Home: Main entry screen
 * - Components: Basic component demos
 * - List: FlatList implementation
 * - Image: Image component with props
 * - Counter: State management demo
 * - Color: Random color generator
 * - Square: RGB color adjustment demo
 */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';

/**
 * Stack navigator configuration object
 * Defines all available screens and their navigation options
 */
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
