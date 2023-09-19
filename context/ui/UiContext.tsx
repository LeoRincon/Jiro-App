import { createContext } from 'react';

interface UiContextProps {
 openMenu: boolean;
 isAddingEntry: boolean;
 isDragging: boolean;

 setIsAddingEntry: (isAdding: boolean) => void;
 handlerOpenMenu: () => void;
 handlerCloseMenu: () => void;

 startDragging: () => void;
 endDragging: () => void;
}

export const UiContext = createContext<UiContextProps>({} as UiContextProps);
