import {useEffect, useRef, useState} from 'react';
import {HomeDataProps} from '../constants/HomeData';
import {cacheData, getCacheData} from '../utils/CacheData';

export const useHomeData = () => {
  const [loading, setLoading] = useState(true);
  const [homeData, setHomeData] = useState<HomeDataProps | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const skipFirstEffect = useRef(false);

  const initializeData = async () => {
    const cacheData = await getCacheData();
    checkIsCompleted(cacheData);
    setHomeData(cacheData);
    setLoading(false);
  };

  useEffect(() => {
    initializeData();
  }, []);

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

  const checkIsCompleted = (data: HomeDataProps) => {
    setIsCompleted(data.every(x => x.isCompleted));
  };

  useEffect(() => {
    if (loading) return;
    if (skipFirstEffect.current) {
      skipFirstEffect.current = false;
      return;
    }
    checkIsCompleted(homeData);
    cacheData(homeData);
  }, [homeData]);

  return {
    homeData,
    updateChildSelection,
    isLoading: loading,
    isCompleted,
  };
};
