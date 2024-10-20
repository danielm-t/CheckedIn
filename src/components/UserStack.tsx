import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CommonActions, NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {BottomNavigation} from 'react-native-paper';
import Icon from '@react-native-vector-icons/fontawesome6';

const Tab = createBottomTabNavigator();
function UserStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={({navigation, state, descriptors, insets}) => (
          <BottomNavigation.Bar
            navigationState={state}
            safeAreaInsets={insets}
            onTabPress={({route, preventDefault}) => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
                navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({route, focused, color}) => {
              const {options} = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({focused, color, size: 24});
              }

              return null;
            }}
            getLabelText={({route}) => {
              const {options} = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.title;

              return label;
            }}
          />
        )}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => {
              return (
                <Icon
                  name="house"
                  size={size}
                  color={color}
                  iconStyle="solid"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Photo"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Submit a photo',
            tabBarIcon: ({color, size}) => {
              return (
                <Icon
                  name="camera"
                  size={size}
                  color={color}
                  iconStyle="solid"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Social"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Social',
            tabBarIcon: ({color, size}) => {
              return (
                <Icon
                  name="user-group"
                  size={size}
                  color={color}
                  iconStyle="solid"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => {
              return (
                <Icon name="user" size={size} color={color} iconStyle="solid" />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default UserStack;
