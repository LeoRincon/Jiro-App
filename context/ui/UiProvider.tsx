import { FC, useReducer } from 'react';
import { UiContext, uiReducer } from '.';

export interface UiState {
 openMenu: boolean;
}

interface UiProviderProps {
 children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: UiState = {
 openMenu: false,
};

export const UiProvider: FC<UiProviderProps> = ({ children }) => {
 const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE);

 return (
  <UiContext.Provider value={INITIAL_STATE}>{children}</UiContext.Provider>
 );
};
