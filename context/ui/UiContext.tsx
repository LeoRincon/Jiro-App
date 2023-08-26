import { createContext } from 'react';

interface UiContextProps {
 openMenu: boolean;
 handlerOpenMenu: () => void;
 handlerCloseMenu: () => void;
}

export const UiContext = createContext<UiContextProps>({} as UiContextProps);
