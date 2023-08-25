import AsyncStorage from '@react-native-async-storage/async-storage';
import {HomeData, HomeDataProps} from '../../constants/HomeData';

const CacheDataKey = 'HomeData';

export const cacheData = (data: HomeDataProps) => {
  AsyncStorage.setItem(CacheDataKey, JSON.stringify(data));
};
export const getCacheData = async (): Promise<HomeDataProps> => {
  const data = await AsyncStorage.getItem(CacheDataKey);
  if (data) {
    return JSON.parse(data);
  }
  return HomeData;
};
export const clearCacheData = async () => {
  await AsyncStorage.removeItem(CacheDataKey);
};
