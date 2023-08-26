import { FC, useReducer } from 'react';
import { UiContext, uiReducer } from '.';
import handler from '../../pages/api/hello';

export interface UiState {
 openMenu: boolean;
}

interface UiProviderProps {
 children: JSX.Element | JSX.Element[];
}

export const INITIAL_STATE: UiState = {
 openMenu: false,
};

export const UiProvider: FC<UiProviderProps> = ({ children }) => {
 const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE);

 const handlerOpenMenu = () => {
  dispatch({ type: 'UI-openMenu' });
 };

 const handlerCloseMenu = () => {
  dispatch({ type: 'UI-closeMenu' });
 };

 return (
  <UiContext.Provider value={{ ...state, handlerOpenMenu, handlerCloseMenu }}>
   {children}
  </UiContext.Provider>
 );
};
