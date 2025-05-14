import React from "react";
import axios, { Axios } from "axios";
import { useEffect,useState } from "react";
import './App.css'

function Read(){
    const [result, setResult] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:2005/read')
        .then((result)=>{
            setResult(result.data)
        })
        .catch((err)=>{console.log(err)});
    },[])

    return(
        <div>
            <table border='1' cellSpacing='0'>
                <thead>
                  <tr>
                    <th>username</th>
                    <th>email</th>
                    <th>password</th>

                    </tr>  
                </thead>
                <tbody>
                    {
                        result.map((results) =>{
                            return(
                                <tr key={result.indexOf(results)}>
                                    <td>{results.username}</td>
                                    <td>{results.email}</td>
                                    <td>{results.password}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )

}

export default Read;