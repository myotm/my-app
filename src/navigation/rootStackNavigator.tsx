import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NotFoundScreen from '../screens/notFoundScreen';
import AuthStackNavigator from './authStackNavigator';
import TeacherStackNavigator from './teacherStackNavigator';
import StudentStackNavigator from './studentStackNavigator';
import { RootStackParamList } from '../types';

const RootStack = createStackNavigator<RootStackParamList>();
const RootStackNavigator = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const user = useSelector((state: any) => state.user);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Auth" component={AuthStackNavigator} />
        <RootStack.Screen name="Teacher" component={TeacherStackNavigator} />
        <RootStack.Screen name="Student" component={StudentStackNavigator} />
        
        {/* <RootStack.Screen
            name="NotFound"
            component={NotFoundScreen}
            options={{ title: 'Oops!' }}
        /> */}
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
