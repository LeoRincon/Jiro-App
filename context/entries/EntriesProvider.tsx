import { FC, ReactNode, useReducer, useEffect } from 'react';

import { Entry } from '../../typings';

import { EntriesContext, entriesReducer } from './';
import entriesApi from '../../apis/entriesApi';

export interface EntriesState {
 entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
 entries: [],
};

export const EntriesProvider: FC<{ children: ReactNode }> = ({ children }) => {
 const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

 const addNewEntry = async (description: string) => {
  const { data } = await entriesApi.post('/entries', { description });

  dispatch({ type: '[Entry] Add-Entry', payload: data });
 };

 const updateEntry = async ({ _id, description, status }: Entry) => {
  try {
   const { data } = await entriesApi.put(`/entries/${_id}`, {
    description,
    status,
   });
   dispatch({ type: '[Entry] Entry-Updated', payload: data });
  } catch (error) {}
 };

 const refreshEntries = async () => {
  const { data } = await entriesApi.get('/entries');
  dispatch({ type: '[Entry] Refresh-Data', payload: data });
 };

 useEffect(() => {
  refreshEntries();
 }, []);

 return (
  <EntriesContext.Provider
   value={{
    ...state,

    // Methods
    addNewEntry,
    updateEntry,
   }}
  >
   {children}
  </EntriesContext.Provider>
 );
};
