import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialState },
  reducers: {
    userDetails: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { userDetails, profileId } = userSlice.actions
export default userSlice.reducer
