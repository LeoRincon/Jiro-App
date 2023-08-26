import { UiState } from '.';

type UiAction = { type: 'UI-openMenu' } | { type: 'UI-closeMenu' };

export const uiReducer = (state: UiState, action: UiAction): UiState => {
 switch (action.type) {
  case 'UI-openMenu':
   return {
    ...state,
    openMenu: true,
   };
  case 'UI-closeMenu':
   return {
    ...state,
    openMenu: false,
   };
  default:
   return state;
 }
};
