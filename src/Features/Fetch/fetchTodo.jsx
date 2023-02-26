import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAddTodo } from './fetchData'

export default function FetchTodo(el){
  const dispatch = useDispatch()
  const { data, isLoading, error } = useSelector(state => state.fetchData)
  const [todolist, settodo] = useState('')
  const handleSubmit = event => {
    event.preventDefault()
    dispatch(fetchAddTodo({ username : el.user, todolist }))
  }

  if (isLoading) {
    <p>Loading...</p>
  }

  if (error) {
    <p>Error:</p>
  }

  if (data.success) {
    <p>list add successful!</p>
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <br />
        <label>
          Todo:
          <input type="text" value={todolist} onChange={event => settodo(event.target.value)} />
        </label>
        <br />
        <button type="submit">Add Todo</button>
      </form>
    </>
  )
}
