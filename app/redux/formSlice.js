import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    form : null
}

export const FormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.form = action.payload
    },
  },
})

export const { setFormData } = FormSlice.actions

export default FormSlice.reducer