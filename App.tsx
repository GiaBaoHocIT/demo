import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import InfoScreen from './screens/InfoScreen';

export type RootStackParamList = {
  Home: undefined;
  Detail: { user: { id: string; name: string; email: string } };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Danh sách' }} />
    <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Chi tiết người dùng' }} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName: string;

            if (route.name === 'Trang chủ') {
              iconName = 'home';
            } else if (route.name === 'Thông tin') {
              iconName = 'information-circle';
            } else {
              iconName = 'information-circle';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Trang chủ" component={HomeStack} />
        <Tab.Screen name="Thông tin" component={InfoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
