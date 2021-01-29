import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'domains/github';

// export type UserState = { users: User[] }; // User型配列のusers(type: UserState)がStoreに格納される
// const initialState: UserState = { users: [] };

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     membersGotten: (state, action: PayloadAction<{ users2: User[] }>) => ({
//       ...state,
//       users: action.payload.users2,
//       isLoading: false,
//       error222: null,
//       orgCOde: ''
//     }),
//     membersClear: (state) => ({
//       ...state,
//       users: [],
//       isLoading: false,
//       error222: null,
//     }),
//   },
// });

export type UserState = { users: User[] }; // User型配列のusers(type: UserState)がStoreに格納される
const initialState: UserState = { users: [] };

export type MultiState = {
  users: User[];
  orgCode: string;
};

export const userSlice = createSlice({
  name: 'user',
  initialState: { users: [], orgCode: "" } as MultiState,
  reducers: {
    membersGotten: (state, action: PayloadAction<{ users2: User[], orgCode: string }>) => ({
      ...state,
      users: action.payload.users2,
      isLoading: false,
      error222: null,
      orgCode: action.payload.orgCode
    }),
    membersClear: (state) => ({
      ...state,
      users: [],
      isLoading: false,
      error222: null,
    }),
  },
});
