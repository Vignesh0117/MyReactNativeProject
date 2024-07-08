import * as React from 'react';
import {Drawer} from 'react-native-drawer-layout';

interface DrawerComponentProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
  drawerContent: any;
  children: React.ReactNode;
}

export default function DrawerComponent(props: DrawerComponentProps) {
  const {open, onClose, onOpen, children, drawerContent} = props;

  const renderDrawerContent = React.useCallback(() => {
    return <>{drawerContent}</>;
  }, [drawerContent]);

  return (
    <Drawer
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      renderDrawerContent={renderDrawerContent}>
      {children}
    </Drawer>
  );
}
