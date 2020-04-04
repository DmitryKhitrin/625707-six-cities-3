import {useState, useEffect} from 'react';

export const useActiveItem = () => {
  const [activeItem, setActiveItem] = useState(``);
  const handleSetActiveItem = (value: string) => setActiveItem(value);
  const handleRemoveActiveItem = () => setActiveItem(``);
  return {
    activeItem,
    handleSetActiveItem,
    handleRemoveActiveItem,
  };
};
