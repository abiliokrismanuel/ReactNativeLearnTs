import React from 'react';
//image
import {Image} from 'react-native';
//nav
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//types
import {BottomTabParamList} from './types';
import {IconProps} from './types';
//screens
import HomeScreen from '../screens/HomeScreen';
import PendataanScreen from '../screens/PendataanScreen';
import JadwalIbadahScreen from '../screens/JadwalIbadahScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const HomeTabBarIcon: React.FC<IconProps> = ({size}) => (
  <Image
    source={require('../assets/icons/IcoHome.png')}
    style={{width: size, height: size}}
  />
);

const PendataanTabBarIcon: React.FC<IconProps> = ({size}) => (
  <Image
    source={require('../assets/icons/IcoEdit.png')}
    style={{width: size, height: size}}
  />
);

const JadwalIbadahTabBarIcon: React.FC<IconProps> = ({size}) => (
  <Image
    source={require('../assets/icons/IcoCalendar.png')}
    style={{width: size, height: size}}
  />
);

const ProfileTabBarIcon: React.FC<IconProps> = ({size}) => (
  <Image
    source={require('../assets/icons/IcoProfile.png')}
    style={{width: size, height: size}}
  />
);

const BottomNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="HomeScreen">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: HomeTabBarIcon,
          }}
        />
        <Tab.Screen
          name="Pendataan"
          component={PendataanScreen}
          options={{
            headerShown: false,
            tabBarIcon: PendataanTabBarIcon,
          }}
        />
        <Tab.Screen
          name="Jadwal Ibadah"
          component={JadwalIbadahScreen}
          options={{
            headerShown: false,
            tabBarIcon: JadwalIbadahTabBarIcon,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ProfileTabBarIcon,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNav;
