import React from 'react'
import { Fetch, FetchTodo } from '../Features'

export default function Home(){
    return(
        <>
            <FetchTodo/>
            <br/>
            <Fetch/>
        </>
    )
}