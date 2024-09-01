import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PaginationState {
  currentPage: number;
  usersPerPage: number;
  usersToShow: number;
}

const initialState: PaginationState = {
  currentPage: 1,
  usersPerPage: 10,
  usersToShow: 10,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setUsersPerPage(state, action: PayloadAction<number>) {
      state.usersPerPage = action.payload;
    },
    setUsersToShow(state, action: PayloadAction<number>) {
      state.usersToShow = action.payload;
    },
  },
});

export const { setPage, setUsersPerPage, setUsersToShow } =
  paginationSlice.actions;

export default paginationSlice.reducer;
