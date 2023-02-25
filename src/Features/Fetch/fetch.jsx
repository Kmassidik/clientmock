import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './fetchData'

export default function Fetch(){
  const dispatch = useDispatch()
  const { data, isLoading, error } = useSelector(state => state.fetchData)

  useEffect(() => {
    dispatch(fetchData())
    // dispatch(fetchData('http://localhost:3001/api'))
  }, [dispatch])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      {data.map(post => (
        <div key={post.id}>
          {/* <p>{post.todo} - {post.completed ? <p>true</p> : <p>false</p>} - {post.username}</p> */}
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}