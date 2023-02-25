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

export const fetchData = () => async dispatch => {
  dispatch(getDataStart())
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch(getDataSuccess(response.data))
  } catch (error) {
    dispatch(getDataFail(error))
  }
}

export const fetchLogin = ({ username, password }) => async dispatch => {
  dispatch(getDataStart())
  try {
    const response = await axios.post('http://localhost:3001/api/login', { username, password })
    dispatch(getDataSuccess(response.data))
  } catch (error) {
    dispatch(getDataFail(error))
  }
}

export const fetchRegister = ({ username, password }) => async dispatch => {
  dispatch(getDataStart())
  try {
    const response = await axios.post('http://localhost:3001/api/register', { username, password })
    dispatch(getDataSuccess(response.data))
  } catch (error) {
    dispatch(getDataFail(error))
  }
}
export const fetchAddTodo = ({ todolist, username }) => async dispatch => {
  dispatch(getDataStart())
  try {
    const response = await axios.post('http://localhost:3001/api/addTodo', { todolist, username })
    dispatch(getDataSuccess(response.data))
  } catch (error) {
    dispatch(getDataFail(error))
  }
}

export default slice.reducer
