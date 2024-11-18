import { ReactNode } from 'react';


interface TabProps {
  children: ReactNode;
  title: string; // Add title to the interface
}

const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};

export default Tab;