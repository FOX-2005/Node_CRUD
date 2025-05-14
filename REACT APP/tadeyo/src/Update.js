import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

function Update() {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        axios.put(`http://localhost:2005/update/${email}`, {username, email, password })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" onChange={e => setUserName(e.target.value)} required />

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" onChange={e => setEmail(e.target.value)} required />

                <label htmlFor="password">Password:</label>
                <input type="password" name="password" onChange={e => setPassword(e.target.value)} required />

                <button type="submit" name="submit">Update</button>
            </form>
        </div>
    )
}

export default Update;