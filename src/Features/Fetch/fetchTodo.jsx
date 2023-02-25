import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRegister } from './fetchData'

export default function FetchRegister(){
  const dispatch = useDispatch()
  const { data, isLoading, error } = useSelector(state => state.fetchData)

  const [username, setUsername] = useState('')
  const [todo, settodo] = useState('')
  setUsername('1')
  const handleSubmit = event => {
    event.preventDefault()
    dispatch(fetchRegister({ todo, username }))
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
    <form onSubmit={handleSubmit}>
      <br />
      <label>
        Todo:
        <input type="text" value={todo} onChange={event => settodo(event.target.value)} />
      </label>
      <br />
      <button type="submit">Add Todo</button>
    </form>
  )
}
