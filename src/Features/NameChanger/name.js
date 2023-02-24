import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nameOne, nameTwo } from './nameChanger'

export function NameChanger() {
  const count = useSelector((state) => state.name.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(nameOne())}
        >
          Kurnia
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(nameTwo())}
        >
          Massidik
        </button>
      </div>
    </div>
  )
}