import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isAuthenticated: true,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    isAuthenticated: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { isAuthenticated } = userSlice.actions

export default userSlice.reducer
