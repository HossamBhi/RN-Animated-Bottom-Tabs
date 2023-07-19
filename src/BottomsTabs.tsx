import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Products from './screens/Products';
import Cart from './screens/Cart';
import Favorites from './screens/Favorites';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

const TABS = [
  {
    name: 'Products',
    Component: Products,
  },
  {
    name: 'Cart',
    Component: Cart,
  },
  {
    name: 'Favorites',
    Component: Favorites,
  },
  {
    name: 'Profile',
    Component: Profile,
  },
];

export default () => (
  <Tab.Navigator>
    <Tab.Group>
      {TABS.map(({name, Component}) => (
        <Tab.Screen
          options={{tabBarLabel: name}}
          name={name}
          component={Component}
        />
      ))}
    </Tab.Group>
  </Tab.Navigator>
);
