import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from '../types';
import {
    LoginScreen,
    UserTypeScreen,
    UserDetailsScreen
 } from '../screens/authScreens';


const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthStackNavigator = (): JSX.Element => {
    return (
        <AuthStack.Navigator
            initialRouteName="UserType"
            screenOptions={{ headerShown: false }}
        >
            <AuthStack.Screen name="UserType" component={UserTypeScreen} />
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen name="UserDetails" component={UserDetailsScreen} />

        </AuthStack.Navigator>
    );
};

export default AuthStackNavigator;