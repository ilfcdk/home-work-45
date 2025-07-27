import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type User = { id: number; name: string };

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter(u => u.id !== action.payload);
    },
  },
});

export const { setUsers, addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
