import React, { useEffect } from 'react'
import { Fetch, FetchTodo } from '../Features'
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigte = useNavigate()
    let storage = localStorage.getItem("access")
    const auth = () => {
        if (storage === "" || storage === null){
            return navigte('/Login')
        } 
    }
    useEffect(() => {
        auth()
    },[])
    return(
        <>
            <FetchTodo/>
                <br/>
            <Fetch/>
        </>
    )
}