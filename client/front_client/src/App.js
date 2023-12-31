import React, {useState, useEffect} from 'react';
import Textfield from "./textfield";
import Home from "./Home";
import {UserProvider} from "./UserContext";
import Register from "./Register";
import Login from "./Login";
// import './App.css'


function App() {
    const [data, setData] = useState('');

    useEffect(() => {
        // Fetch data from the FastAPI backend
        fetch('http://localhost:8000/tasks/6').then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                // console.log(data)
            }
        )
    }, []);

    return (

        <div className="content">

            <UserProvider>
            <Home/>
                 {/*<Register/> */}
                <Login/>

            </UserProvider>

<div>

</div>

        </div>
    );
}

export default App;