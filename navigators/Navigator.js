
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../views/Home';
import Profile from '../views/Profile';
import Single from '../views/Single';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Profile',
      },
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const Navigator = createStackNavigator(
  // RouteConfigs

  {
    Home: {
      screen: TabNavigator,
      navigationOptions: {
        header: null, // this will hide the header
      },
    },
    Single: {
      screen: Single},
  },
);

export default createAppContainer(Navigator);
