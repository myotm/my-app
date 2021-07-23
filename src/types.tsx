/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Auth: undefined;
  Teacher: undefined;
  Student: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  Login: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type LoginParamList = {
  LoginScreen: undefined;  
};

export type AuthStackParamList = {
  Login: undefined;
  UserType: undefined;
  UserDetails: undefined;
  // UserDetails: { user: Record<string, any> };
};

export type TeacherStackParamList = {
  Main: undefined;
  Profile: undefined;
}

export type StudentStackParamList = {
  Article: undefined;
  Profile: undefined;
}