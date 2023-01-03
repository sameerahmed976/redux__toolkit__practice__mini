import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: "1",
    name: "sam",
  },
  {
    id: "2",
    name: "harry",
  },
  {
    id: "3",
    name: "ron",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
