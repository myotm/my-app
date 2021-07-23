import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StudentStackParamList, TeacherStackParamList } from '../types';
import {
    ArticleScreen
 } from '../screens/homeStackScreens/studentScreens';
 import Colors from '../constants/Colors';
 import useColorScheme from '../hooks/useColorScheme';
import { StudentProfileScreen } from '../screens/homeStackScreens/studentScreens';
import { Ionicons } from '@expo/vector-icons';

 const StudentStack = createBottomTabNavigator<StudentStackParamList>();

 const StudentStackNavigator = (): JSX.Element => {

    const colorScheme = useColorScheme();

    return (
        <StudentStack.Navigator
            initialRouteName="Profile"
            tabBarOptions={{ activeTintColor: 'darkblue', labelPosition: 'beside-icon', activeBackgroundColor: 'lightgray'}}
        >
            <StudentStack.Screen name="Article" component={ArticleScreen} 
                options={{ title: "Article", tabBarIcon: ({ focused }) => (
                    <Ionicons name="logo-android" size={20} />
                )  }}
            />
            <StudentStack.Screen name="Profile" component={StudentProfileScreen} 
                options={{ title: "Profile", tabBarIcon: ({ color: darkblue }) => (
                    <Ionicons name="logo-android" size={20} />
                )  }}
            />
        </StudentStack.Navigator>
    );
};

export default StudentStackNavigator;