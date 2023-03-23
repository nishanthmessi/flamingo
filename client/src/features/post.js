import { createSlice } from "@reduxjs/toolkit"

const initialState = ""

export const postSlice = createSlice({
  name: "post",
  initialState: { value: initialState },
  reducers: {
    postId: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { postId } = postSlice.actions
export default postSlice.reducer
