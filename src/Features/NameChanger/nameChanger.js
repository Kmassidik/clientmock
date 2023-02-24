import { createSlice } from '@reduxjs/toolkit'

export const nameChanger = createSlice({
  name: 'name',
  initialState: {
    value: "",
  },
  reducers: {
    nameOne: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = "kurnia"
    },
    nameTwo: (state) => {
      state.value = "massidik"
    },
  },
})

// Action creators are generated for each case reducer function
export const { nameOne, nameTwo } = nameChanger.actions

export default nameChanger.reducer