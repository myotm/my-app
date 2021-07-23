import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeDataToStorage = async (
  key: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>,
): Promise<string> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return 'success';
  } catch (e) {
    return e;
  }
};

export const getDataFromStorage = async (
  key: string,
): Promise<string | null> => {
  try {
    const storedData = await AsyncStorage.getItem(key);
    if (storedData) {
      return storedData;
    }
    return null;
  } catch (e) {
    return e;
  }
};

export const removeDataFromStorage = async (key: string): Promise<string> => {
  try {
    await AsyncStorage.removeItem(key);
    return 'success';
  } catch (e) {
    return e;
  }
};
