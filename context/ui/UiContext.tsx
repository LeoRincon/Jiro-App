import { createContext } from 'react';

interface UiContextProps {
 openMenu: boolean;
}

export const UiContext = createContext<UiContextProps>({
 openMenu: false,
});
