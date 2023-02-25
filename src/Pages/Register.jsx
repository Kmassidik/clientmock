import React, { useState } from 'react'

export default function Login(){
    const [name, setName] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("berhasil tekan tombol =>",name);
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    name='text' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                <button type='submit'>Register</button>
            </form>
        </>
    )
}