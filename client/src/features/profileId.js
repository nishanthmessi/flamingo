import { createSlice } from "@reduxjs/toolkit"

const initialState = ""

export const profileIdSlice = createSlice({
  name: "profile",
  initialState: { value: initialState },
  reducers: {
    profileId: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { profileId } = profileIdSlice.actions
export default profileIdSlice.reducer
