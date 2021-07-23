import React, { useState, useEffect } from 'react';
import { Text, View } from '../../components/Themed';
import tailwind from 'tailwind-rn';
import { Input, Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '../../types';
import { storeDataToStorage } from "../../AsyncStorage/storage";
import { USER_EMAIL, USER_PASSWORD } from '../../constants/types';

const LoginScreen = ({
    navigation,
}: StackScreenProps<AuthStackParamList>): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginBtn = async() => {
        alert(email + ' ' + password);
        await storeDataToStorage(USER_EMAIL, { email });
        await storeDataToStorage(USER_PASSWORD, { password });
        navigation.navigate('UserDetails');
    };

    return (
        <View style={tailwind('h-full')}>
            <Text style={tailwind('text-black pt-20 text-2xl flex-none pl-5 items-center justify-center')}>Welcome to Management System!</Text>
            <View style={tailwind('h-full items-center justify-center pb-10')}>
                <Input
                    style={tailwind('pl-5')}
                    placeholder='Email'
                    onChangeText= {(text) => setEmail(text)}
                />
                <Input
                    style={tailwind('pl-5')}
                    placeholder='Password'
                    onChangeText= {(text) => setPassword(text)}

                />
                <TouchableOpacity 
                    style={tailwind('w-1/2 h-8 bg-gray-200 items-center justify-center')}
                    onPress={handleLoginBtn}
                >
                    <Text 
                        style={tailwind('')}
                    >Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default LoginScreen;