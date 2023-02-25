import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLogin } from './fetchData'

export default function FetchLogin(){
  const dispatch = useDispatch()
  const { data, isLoading, error } = useSelector(state => state.fetchData)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(fetchLogin({ username, password }))
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (data.error) {
    return <div>Error: { data.error }</div>
  }

  if (data.success) {
    return <div>Login successful!</div>
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  )
}
