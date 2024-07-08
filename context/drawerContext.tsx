import React, {
  ReactNode,
  createContext,
  useContext,
  useRef,
  useState,
} from 'react';
import {DrawerLayoutAndroid} from 'react-native';

type DrawerContextType = {
  drawer: React.RefObject<any>;
  // isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const DrawerContext = createContext<DrawerContextType>({
  drawer: {current: null},
  // isDrawerOpen: false,
  openDrawer: () => {},
  closeDrawer: () => {},
});

type DrawerProviderProps = {
  children: ReactNode;
};

export const useDrawer = () => useContext(DrawerContext);

export const DrawerProvider = ({children}: DrawerProviderProps) => {
  const drawer: any = useRef<DrawerLayoutAndroid>(null);
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    drawer.current.openDrawer();
    // setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    drawer.current?.closeDrawer();
    // setIsDrawerOpen(false);
  };

  return (
    <DrawerContext.Provider value={{drawer, openDrawer, closeDrawer}}>
      {children}
    </DrawerContext.Provider>
  );
};
