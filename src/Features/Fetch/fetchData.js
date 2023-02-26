import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const slice = createSlice({
  name: 'fetchData',
  initialState: {
    data: [],
    isLoading: false,
    error: null
  },
  reducers: {
    getDataStart: state => {
      state.isLoading = true
    },
    getDataSuccess: (state, { payload }) => {
      state.data = payload
      state.isLoading = false
    },
    getDataFail: (state, { payload }) => {
      state.error = payload
      state.isLoading = false
    }
  }
})

export const { getDataStart, getDataSuccess, getDataFail } = slice.actions

export const fetchData = ({username}) => async dispatch => {
  dispatch(getDataStart())
  try {
    const response = await axios.get(`https://real-red-gecko-cuff.cyclic.app/api/list/${username}`)
    dispatch(getDataSuccess(response.data))
  } catch (error) {
    dispatch(getDataFail(error))
  }
}

export const fetchLogin = ({ username, password }) => async dispatch => {
  dispatch(getDataStart())
  try {
    const response = await axios.post('https://real-red-gecko-cuff.cyclic.app/api/login', { username, password })
    dispatch(getDataSuccess(response.data))
  } catch (error) {
    dispatch(getDataFail(error))
  }
}
export const fetchRegister = ({ username, password }) => async dispatch => {
  dispatch(getDataStart())
  try {
    const response = await axios.post('https://real-red-gecko-cuff.cyclic.app/api/register', { username, password })
    dispatch(getDataSuccess(response.data))
  } catch (error) {
    dispatch(getDataFail(error))
  }
}
export const fetchAddTodo = ({ todolist, username }) => async dispatch => {
  dispatch(getDataStart())
  try {
    await axios.post('https://real-red-gecko-cuff.cyclic.app/api/addTodo', { username, todolist })
    dispatch(fetchData())
  } catch (error) {
    dispatch(getDataFail(error))
  }
}
export const fetchDataTodo = ({username, id}) => async dispatch => {
  dispatch(getDataStart())
  try {
    await axios.put(`https://real-red-gecko-cuff.cyclic.app/${username}/${id}`)
  } catch (error) {
    dispatch(getDataFail(error))
  }
}

export default slice.reducer
