import { FC, useReducer } from 'react';
import { UiContext, uiReducer } from '.';
import handler from '../../pages/api/hello';

export interface UiState {
 openMenu: boolean;
 isAddingEntry: boolean;
 isDragging: boolean;
}

interface UiProviderProps {
 children: JSX.Element | JSX.Element[];
}

export const INITIAL_STATE: UiState = {
 openMenu: false,
 isAddingEntry: false,
 isDragging: false,
};

export const UiProvider: FC<UiProviderProps> = ({ children }) => {
 const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE);

 const handlerOpenMenu = () => {
  dispatch({ type: 'UI-openMenu' });
 };

 const handlerCloseMenu = () => {
  dispatch({ type: 'UI-closeMenu' });
 };

    const setIsAddingEntry = (isAdding: boolean) => {
     dispatch({ type: 'UI - Set isAddingEntry', payload: isAdding });
    };

    const startDragging = () => {
     dispatch({ type: 'UI - Start Dragging' });
    };

    const endDragging = () => {
     dispatch({ type: 'UI - End Dragging' });
    };


 return (
  <UiContext.Provider
   value={{
    ...state,
    handlerOpenMenu,
    handlerCloseMenu,
    setIsAddingEntry,

    endDragging,
    startDragging,
   }}
  >
   {children}
  </UiContext.Provider>
 );
};
