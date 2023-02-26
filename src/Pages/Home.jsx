import React, { useEffect } from 'react'
import { Fetch, FetchTodo } from '../Features'
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigte = useNavigate()
    let storage = localStorage.getItem("access")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const auth = () => {
        if (storage === "" || storage === null){
            return navigte('/Login')
        } 
    }
    const handleLogout = event => {
        event.preventDefault()
        localStorage.clear()
        return window.location.href= './'
      }
    useEffect(() => {
        auth()
    },[auth])
    return(
        <>
        <div>
            hello {storage} <button onClick={handleLogout}>logout</button>
        </div>
            <FetchTodo user={storage}/>
                <br/>
            <Fetch user={storage}/>
        </>
    )
}