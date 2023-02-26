import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './fetchData'

export default function Fetch(el){
  const [isSet, Set] = useState(true)
  const dispatch = useDispatch()
  const { data, isLoading, error } = useSelector(state => state.fetchData)

  // dispatch(fetchData({username : el.user}))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const check = () => {
    dispatch(fetchData({username : el.user}))
  }
  const checkData = () => {
    if (data !== undefined){
      return Set(false)
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      check()
      console.log('This will run after 7 second!')
      checkData()
    }, 3000);
    return () => clearTimeout(timer)
  },[check])

  return (
    <>
      {isSet ? 
      <p>loading....</p> : 
      data.map(post => (
        <div key={post.id}>
          <table>
            <tr>
              <th>List Todo</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>{post.todo}</td>
              <td>{post.completed ? <>ok</> : <>no</>}</td>
            </tr>
          </table>
        </div>
      ))}
    </>
  )
}