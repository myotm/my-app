import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import tailwind from 'tailwind-rn';
import { TeacherStackParamList } from '../../../types';
import { Teacher, Subject } from '../../../constants/models';
import { Input } from "react-native-elements/dist/input/Input";
import SubjectsModal from '../../../components/modal/subjectsModal';

const TeacherProfileScreen = ({
    route, navigation
}: StackScreenProps<TeacherStackParamList>): JSX.Element => {
    const [profile, setProfile] = useState<Teacher>();
    const [fullName, setFullName] = useState('Matthew McCoughnahey');
    const [subjects, setSubjects] = useState<string[]>([]);
    const [openSubjectsModal, setOpenSubjectModal] = useState(false);

    const onSubjectsSubmit = (selectedSubjects: Subject[]) => {
      const selected = selectedSubjects.map((subject: Subject) => subject.title);
        setSubjects(selected);
        setOpenSubjectModal(false);
    };

    return(
        <View
            style={tailwind('justify-center items-center h-full w-full')}
        >
            <View style={tailwind('w-full')} >
                <Text style={tailwind('w-1/3 pl-5')}>Your Name</Text>
                <Input style={tailwind('w-1/3 px-2')} value={fullName} onChangeText={(text) => setFullName(text)}></Input>
            </View>
            <View
                style={tailwind('flex-row flex-wrap mt-5')}
            >
                <Text style={tailwind('text-base text-blue-400 my-1')}>Select Subjects</Text>
                <TouchableOpacity
                style={[
                    tailwind(
                    'w-full border border-gray-400 rounded-lg justify-center px-3 py-1',
                    ),
                    {
                    minHeight: 50,
                    },
                ]}
                onPress={() => setOpenSubjectModal(true)}
                >
                {subjects.length > 0 ? (
                    <View style={tailwind('flex-row flex-wrap')}>
                    {subjects.map(skill => (
                        <View
                        style={tailwind(
                            'py-1 px-2 bg-green-200 rounded-full m-px justify-center items-center',
                        )}
                        >
                        <Text>{skill}</Text>
                        </View>
                    ))}
                    </View>
                ) : (
                    <Text style={tailwind('text-gray-400')}>Select subjects</Text>
                )}
                </TouchableOpacity>
                <View
                style={tailwind('mt-10')}
                >
                <SubjectsModal
                    open={openSubjectsModal}
                    onSubmit={onSubjectsSubmit}
                    handleOnClose={() => setOpenSubjectModal(false)}
                />
                </View>
            </View>
        </View>
    )
};

export default TeacherProfileScreen;