import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import tailwind from 'tailwind-rn';
import { TeacherStackParamList } from '../../../types';

const ArticleScreen = ({
    route, navigation
}: StackScreenProps<TeacherStackParamList>): JSX.Element => {


    return(
        <View
            style={tailwind('justify-center items-center h-full w-full')}
        >
            <Text>Article Screen!</Text>
        </View>
    )
};

export default ArticleScreen;