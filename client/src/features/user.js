import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

const userSlice = createSlice({
  name: "user",
  initialState: { value: initialState },
  reducers: {
    userDetails: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { userDetails } = userSlice.actions
export default userSlice.reducer
