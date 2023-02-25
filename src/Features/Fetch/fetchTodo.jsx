import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAddTodo } from './fetchData'

export default function FetchTodo(){
  const dispatch = useDispatch()
  const { data, isLoading, error } = useSelector(state => state.fetchData)
  const [todolist, settodo] = useState('')
  const handleSubmit = event => {
    event.preventDefault()
    dispatch(fetchAddTodo({ username : '333', todolist }))
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error:</div>
  }

  if (data.success) {
    return <div>list add successful!</div>
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
