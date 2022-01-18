import React, { useState } from 'react';
import { SocketEmit } from '../SocketIO';

const Search = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const addItemTodo = () => {
        let data = {
            name: name,
            description: description,
            date: new Date().toString()
        }
        SocketEmit("addItemTodo", data);
    }

    return (
        <div>
            <input onChange={(e) => { setName(e.target.value) }} placeholder='Tu nombre' value={name} required/> <br />
            <textarea rows={5} onChange={(e) => { setDescription(e.target.value) }} placeholder='Descripcion de la tarea' value={description} required /><br />
            <button style={{backgroundColor:"#62D312", color:"white", fontWeight:"bold",border: "none", padding: "5px", cursor:"pointer"}} onClick={() => { addItemTodo() }}>Agregar</button>
        </div>
    );
}

export default Search;
