import React from "react";
import { Link } from "react-router-dom";
import './App.css';
import Register from "./Register";
import Update from "./Update";
import Delete from "./Delete";
import Read from "./Read";

function Navbar() {
    return (
        <nav>
            <ul>
                <Link to='/register' element={<Register/>}>INSERT</Link>
                <Link to='/update' element={<Update/>}>UPDATE</Link>
                <Link to='/delete' element={<Delete/>}>DELETE</Link>
                <Link to='/read' element={<Read/>}>READ</Link>
                
            </ul>
        </nav>
    );
}

export default Navbar;
