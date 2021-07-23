import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import tailwind from 'tailwind-rn';
import { StudentStackParamList } from '../../../types';

const StudentProfileScreen = ({
    route, navigation
}: StackScreenProps<StudentStackParamList>): JSX.Element => {


    return(
        <View
            style={tailwind('justify-center items-center h-full w-full')}
        >
            <Text>StudentProfileScreen Screen!</Text>
        </View>
    )
};

export default StudentProfileScreen;