import { UiState } from '.';

type UiAction =
 | { type: 'UI-openMenu' }
 | { type: 'UI-closeMenu' }
 | { type: 'UI - Set isAddingEntry'; payload: boolean }
 | { type: 'UI - Start Dragging' }
 | { type: 'UI - End Dragging' };

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
  case 'UI - Set isAddingEntry':
   return {
    ...state,
    isAddingEntry: action.payload,
   };

  case 'UI - Start Dragging':
   return {
    ...state,
    isDragging: true,
   };

  case 'UI - End Dragging':
   return {
    ...state,
    isDragging: false,
   };

  default:
   return state;
 }
};
