import {useEffect, useRef, useState} from 'react';
import {HomeDataProps} from '../constants/HomeData';
import {cacheData, getCacheData} from '../utils/CacheData';

export const useHomeData = () => {
  const [loading, setLoading] = useState(true);

  const initializeData = async () => {
    const cacheData = await getCacheData();
    setHomeData(cacheData);
    setLoading(false);
  };

  useEffect(() => {
    initializeData();
  }, []);

  const [homeData, setHomeData] = useState<HomeDataProps | null>(null);
  const skipFirstEffect = useRef(false);

  const updateChildSelection = (
    parentId: number,
    childId: number,
    selected: boolean,
  ) => {
    setHomeData(prevData =>
      prevData.map(parentItem =>
        parentItem.id === parentId
          ? {
              ...parentItem,
              child: parentItem.child.map(childItem =>
                childItem.id === childId ? {...childItem, selected} : childItem,
              ),
              isCompleted: parentItem.child.every(child =>
                child.id === childId ? selected : child.selected,
              ),
            }
          : parentItem,
      ),
    );
  };

  useEffect(() => {
    if (loading) return;
    if (skipFirstEffect.current) {
      skipFirstEffect.current = false;
      return;
    }
    cacheData(homeData);
  }, [homeData]);

  return {homeData, updateChildSelection, isLoading: loading};
};
