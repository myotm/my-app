import React, { useState } from "react";
import tailwind from "tailwind-rn";
import { Octicons, FontAwesome5 } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { View, Text, Image, StyButton } from "../../components/Themed";
import AuthStackNavigator from "../../navigation/AuthStackNavigator";
import { AuthStackParamList } from "../../types";
import { storeDataToStorage } from "../../AsyncStorage/storage";
import { USER_TYPE } from "../../constants/types";
import logo from '../../assets/images/flowerLogo.jpg'

const UserTypeScreen = ({
    navigation,
}: StackScreenProps<AuthStackParamList>): JSX.Element => {
    const [userType, setUserType] = useState('teacher');

    const handleNextBtn = async() => {
        alert(userType);
        await storeDataToStorage(USER_TYPE, { userType });
        navigation.navigate('Login');
    };

    return (
        <View
            style={tailwind('flex flex-1 items-center p-10 justify-center bg-white')}
        >
            <View
                style={tailwind('flex-1 flex-col items-center justify-center p-10 bg-white')}
            >
                <Image source={logo} style={tailwind('bg-transparent w-72 h-1/2')}/>

            </View>

            <View 
                style={tailwind('flex-1 flex-col items-center justify-center mb-10 bg-transparent')}
            >
                <Text style={tailwind('text-3xl text-black font-bold mb-5')}>
                    Choose
                </Text>
                <View
                    style={tailwind('flex-row items-center justify-between mt-10 bg-transparent')}    
                >
                    <View
                        style={tailwind(
                        'flex-col items-center justify-center mx-4 bg-transparent',
                        )}
                    >
                        <StyButton
                        style={tailwind(
                            `${
                            userType === 'teacher' ? 'bg-green-600' : 'bg-gray-100'
                            } items-center justify-center rounded-xl`,
                        )}
                        onPress={() => setUserType('teacher')}
                        >
                        <Octicons
                            name="file-submodule"
                            size={40}
                            style={tailwind(
                            `${
                                userType === 'teacher' ? 'text-white' : 'text-black'
                            } p-8`,
                            )}
                        />
                        </StyButton>
                        <Text
                        style={tailwind(
                            `text-lg py-3 ${
                            userType === 'teacher' ? 'text-green-600' : 'text-black'
                            }`,
                        )}
                        >
                        Teacher
                        </Text>
                    </View>
                    <View
                        style={tailwind(
                        'flex-col items-center justify-center ml-4 bg-transparent',
                        )}
                    >
                        <StyButton
                        style={tailwind(
                            `${
                            userType === 'student' ? 'bg-green-600' : 'bg-gray-100'
                            } items-center justify-center rounded-xl`,
                        )}
                        onPress={() => setUserType('student')}
                        >
                        <FontAwesome5
                            name="user-alt"
                            size={40}
                            style={tailwind(
                            `${
                                userType === 'student' ? 'text-white' : 'text-black'
                            } p-8`,
                            )}
                        />
                        </StyButton>
                        <Text
                        style={tailwind(
                            `text-lg py-5 ${
                            userType === 'student' ? 'text-green-600' : 'text-black'
                            }`,
                        )}
                        >
                        Student
                        </Text>
                    </View>
                </View>
            </View>

            <View style={tailwind('w-full items-center bg-transparent')}>
                <StyButton style={tailwind('w-full justify-center items-center rounded-full py-3 px-6 bg-green-600')}
                    onPress={handleNextBtn}
                    >
                        <Text style={tailwind('')}>Next</Text>
                    </StyButton>
            </View>
        </View>
    );
};

export default UserTypeScreen;