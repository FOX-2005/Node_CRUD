import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

function Delete() {
    const [email, setEmail] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        axios.post('http://localhost:2005/delete', { email })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    return (

        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label for="email">Email::</label>
                <input type="email" name="email" onChange={e => setEmail(e.target.value)} required />
                <button type="submit" name="submit">submit</button>
            </form>
        </div>

    )
}

export default Delete;