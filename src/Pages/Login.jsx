import React from 'react'
import { NavLink } from 'react-router-dom'
import {FetchLogin} from '../Features'

export default function Login(){
    return(
        <>
            <FetchLogin/>
            <br/>
            if you dont have account please,&nbsp;
            <NavLink aria-current="page" to="/Register">
                Register
            </NavLink>
        </>
    )
}