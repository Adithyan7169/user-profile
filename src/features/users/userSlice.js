import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRandomUser } from "../../services/api";

export const generateUser = createAsyncThunk(
  "users/generateUser",
  async () => {
    const user = await fetchRandomUser();
    return user;
  }
);

const userSlice = createSlice({
  name: "users",

  initialState: {
    users: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(generateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(generateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })

      .addCase(generateUser.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch user";
      });
  },
});

export default userSlice.reducer;
