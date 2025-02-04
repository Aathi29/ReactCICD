// Inside src/App.js

import React from "react";
import "./App.css";

function App() {
    return (
        <>
            <p className="title">Registration Form</p>

            <form className="App">
                <label>Name</label>
                <input type="text" />
                <label>Email</label>
                <input type="email" />
                <label>Password</label>
                <input type="password" />
                <input type={"submit"}
                    style={{ backgroundColor: "#a1eafb" }} />
            </form>
        </>
    );
}

export default App;