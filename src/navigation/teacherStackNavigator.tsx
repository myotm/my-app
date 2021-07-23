import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TeacherStackParamList } from '../types';
import {
    MainScreen, TeacherProfileScreen
 } from '../screens/homeStackScreens/teacherScreens';
 import Colors from '../constants/Colors';
 import useColorScheme from '../hooks/useColorScheme';

 const TeacherStack = createBottomTabNavigator<TeacherStackParamList>();

 const TeacherStackNavigator = (): JSX.Element => {

    const colorScheme = useColorScheme();

    return (
        <TeacherStack.Navigator
            initialRouteName="Main"
            tabBarOptions={{ activeTintColor: 'darkblue', labelPosition: 'beside-icon', activeBackgroundColor: 'lightgray'}}
        >
            <TeacherStack.Screen 
                name="Main" 
                component={MainScreen} 
            />
            <TeacherStack.Screen name="Profile" component={TeacherProfileScreen} />

        </TeacherStack.Navigator>
    );
};

export default TeacherStackNavigator;