import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Filters } from '../../Types/Filters';
import { User } from '../../Types/User';

interface UserState {
  users: User[];
  filters: Filters;
  loading: boolean;
}

const initialState: UserState = {
  users: [],
  filters: {
    name: '',
    username: '',
    email: '',
    phone: '',
  },
  loading: false,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('/users.json');

  return (await response.json()) as User[];
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<Filters>) {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      });
  },
});

export const { setFilters } = userSlice.actions;

export default userSlice.reducer;
