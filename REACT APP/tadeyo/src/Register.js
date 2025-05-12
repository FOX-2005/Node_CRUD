import React,{useState} from 'react'
import axios from 'axios'
import './App.css'

function Register(){
    const [username,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
     
    function handleSubmit(event){
        event.preventDefault()
        axios.post('http://localhost:2005/register', {username,email,password})
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
       return(
           
    <div className='form'>
           <form onSubmit={handleSubmit}>
                     <label for="username">Username:</label>
                     <input type="text" name="username" onChange={e => setUserName(e.target.value)} required/>
                     <label for="email">Email::</label>
                     <input type="email" name="email" onChange={e => setEmail(e.target.value)} required/>
                     <label for="password">password:</label>
                     <input type="password" name="password" onChange={e => setPassword(e.target.value)} required/>
                     <button type="submit" name="submit">submit</button>
                </form> 
           </div>
           
       )
}

export default Register;