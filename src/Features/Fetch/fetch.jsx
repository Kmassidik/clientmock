import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, fetchDataTodo } from './fetchData'

export default function Fetch(el){
  const [isSet, Set] = useState(true)
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.fetchData)
  const check = () => {
    dispatch(fetchData({username : el.user}))
  }
  const checkData = () => {
    if (data !== undefined){
      return Set(false)
    }
  }
  const handleCompleted = (e,id) => {
    e.preventDefault()
    console.log(el.user,id);
    dispatch(fetchDataTodo({ username:  el.user,id}))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      check()
      console.log('This will run after 1.5 second!')
      checkData()
    }, 1500);
    return () => clearTimeout(timer)
  },[check, checkData])

  return (
    <>
      {isSet ? 
      <p>loading....</p> : 
      <table className='center'>
        {/* // <tbody key={post.id}> */}
        <tbody>
          <tr>
            <th>List Todo</th>
            <th>Action</th>
          </tr>
          {data.map((post) => (
              <tr key={post.id}>
                <td>{post.todo}</td>
                <td>{post.completed ? 
                    <>
                      Completed
                    </> : 
                    <>
                      <button onClick={(e) => handleCompleted(e,post.id)}>Done</button>
                    </>
                    }
                </td>
              </tr>
        ))}
        </tbody>
      </table>
      }
    </>
  )
}