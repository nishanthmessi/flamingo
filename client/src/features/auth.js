import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState: { value: initialState },
  reducers: {
    authenticated: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { authenticated } = authSlice.actions
export default authSlice.reducer
