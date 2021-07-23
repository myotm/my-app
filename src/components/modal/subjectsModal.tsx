import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import tailwind from 'tailwind-rn';
import { subjects } from '../../constants/data';
import { StyButton } from '../Themed';
import { Subject } from '../../constants/models';

type Props = {
  open: boolean;
  onSubmit: (selectedItems: Subject[]) => void;
  handleOnClose: () => void;
};

const SubjectsModal = ({ open, onSubmit, handleOnClose }: Props): JSX.Element => {
  const [selectedItems, setSelectedItems] = useState<Subject[]>([]);
  const subjectItems = subjects;

  const handleOnSubmit = () => {
    onSubmit(selectedItems);
  };

  const handleModalClose = () => {
    setSelectedItems([]);
    handleOnClose();
  };

  const handleOnSelect = (subject: Subject) => {
    if (!selectedItems.includes(subject)) {
      setSelectedItems([...selectedItems, subject]);
    }
  };

  const handleDeselect = (subject: Subject) => {
    setSelectedItems(selectedItems.filter(item => item !== subject));
  };

  const renderSubjectItem = (subjectItem: Subject) =>
    !selectedItems.includes(subjectItem) && (
      <TouchableOpacity
        key={subjectItem.id}
        onPress={() => handleOnSelect(subjectItem)}
        style={tailwind('mb-1')}
      >
        <View
          style={tailwind(
            'p-3 bg-gray-200 flex-row rounded-md justify-between',
          )}
        >
          <Text>{subjectItem.title}</Text>
          <EvilIcons name="plus" size={24} color="black" />
        </View>
      </TouchableOpacity>
    );

  return (
    <Modal
      visible={open}
      animationType="slide"
      transparent
      statusBarTranslucent
      onRequestClose={handleOnClose}
    >
      <View style={tailwind('flex-1 justify-center items-center')}>
        <View
          style={[
            tailwind('rounded-xl bg-white mt-5'),
            {
              height: '92%',
              width: '95%',
              shadowColor: 'gray',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            },
          ]}
        >
          <View style={tailwind('flex-row justify-between items-center p-3')}>
            <Text>Select your skills</Text>
            <Ionicons
              name="close"
              size={24}
              color="black"
              onPress={handleModalClose}
            />
          </View>
          <View style={tailwind('h-px bg-gray-200 w-full')} />
          <View style={tailwind('flex-1 p-2')}>
            <View style={tailwind('flex-wrap flex-row m-1 relative')}>
              {selectedItems.map(skill => (
                <TouchableOpacity onPress={() => handleDeselect(skill)}>
                  <View
                    key={skill.id}
                    style={tailwind(
                      'bg-pink-200 m-px rounded-full flex-row items-center p-1 justify-between',
                    )}
                  >
                    <Text style={tailwind('text-xs')}>{skill.title}</Text>
                    <EvilIcons name="minus" size={20} color="black" />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
            <ScrollView style={tailwind('mt-1')}>
              {subjectItems.map(subject => renderSubjectItem(subject))}
            </ScrollView>
          </View>
          <StyButton
            onPress={handleOnSubmit}
            style={tailwind(
              'px-2 py-3 rounded text-white self-end w-24 m-3 justify-center items-center',
            )}
          >
            <Text style={tailwind('text-white')}>Submit</Text>
          </StyButton>
        </View>
      </View>
    </Modal>
  );
};

export default SubjectsModal;
