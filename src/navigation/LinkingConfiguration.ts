/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        Auth: {
          screens:{
            UserTypeScreen: 'usertype',
            LoginScreen: 'login',
            UserDetails: 'userdetails',
          },
        },
        Teacher: {
          screens: {
            MainScreen: 'main',
            ProfileScreen: 'profile',
          },
        },
        Student: {
          screens: {
            ArticleScreen: 'article',
            ProfileScreen: 'profile',
          },
        },
      },
      NotFound: '*',
    },
  },
};
