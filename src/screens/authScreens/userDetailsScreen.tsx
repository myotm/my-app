import { MaterialIcons } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import tailwind from 'tailwind-rn';
import {
    getDataFromStorage,
    storeDataToStorage
} from '../../AsyncStorage/storage';
import { Student, Teacher, User } from '../../constants/models';
import { USER_TYPE } from '../../constants/types';
import { RootStackParamList } from '../../types';
import { Subject } from '../../constants/models';
import SubjectsModal from '../../components/modal/subjectsModal';

const UserDetailsScreen = ({
    route,
    navigation
}: StackScreenProps<RootStackParamList>): JSX.Element => {
    const [user, setUser] = useState<User>();
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [type, setType] = useState('student');
    const [subjects, setSubjects] = useState<string[]>([]);
    const [openSubjectsModal, setOpenSubjectModal] = useState(false);

    const handleSave = async() => {
      if (type === 'student') {
        navigation.navigate('Student');
      };
      if (type === 'teacher') {
        navigation.navigate('Teacher');
      }
    };

    const onSubjectsSubmit = (selectedSubjects: Subject[]) => {
      const selected = selectedSubjects.map((subject: Subject) => subject.title);
      setSubjects(selected);
      setOpenSubjectModal(false);
    };

    useEffect(() => {
      const getUserType = async () => {
        const userType = await getDataFromStorage(USER_TYPE);
        if (userType) {
          setType(JSON.parse(userType).userType.toString());
        }
      };
      getUserType();
    })
    navigation.setOptions({
        headerShown: true,
        headerLeft: () => (
          <MaterialIcons
            name="arrow-back-ios"
            style={tailwind('text-black text-2xl pl-5')}
            onPress={() => navigation.goBack()}
          />
        ),
        title: 'Update Profile',
        headerTitleStyle: tailwind('text-xl'),
        headerRight: () => (
          <Button
            type="clear"
            title="Save"
            style={tailwind('pr-3')}
            onPress={handleSave}
          />
        ),
      });

    return (
        <View style={tailwind('flex-auto py-3')}>
            <View style={tailwind('pt-2')}>
            <Text style={tailwind('text-base text-blue-400')}>Email</Text>
            <TextInput
                value={email}
                style={tailwind('border-gray-400 h-10 border rounded-lg p-2 mt-1')}
                onChangeText={text => setEmail(text)}
            />
            </View>

            <View style={tailwind('pt-3')}>
            <Text style={tailwind('text-base text-blue-400')}>Name</Text>
            <TextInput
                value={name}
                onChangeText={text => setName(text)}
                autoFocus
                style={tailwind('border-gray-400 h-10 border rounded-lg p-2 mt-1')}
            />
            </View>

            { type === 'student' && (
                
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
                          'py-1 px-2 bg-pink-200 rounded-full m-px justify-center items-center',
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

            )}
            
        </View>
    );
};

export default UserDetailsScreen;