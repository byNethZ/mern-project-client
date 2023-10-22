import React, { useState } from "react";
import "./App.css";
import { environments } from "./global";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser: React.FormEventHandler<HTMLFormElement> = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const response: any = await fetch(environments.urlRegister, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      })

    })

    const data = await response.json();

    console.log(data);
    
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={(evt) => registerUser(evt)}>
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="First Name"
          />
          <label htmlFor="name">Name</label>
        </div>
        <br />
        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <label htmlFor="email">Email</label>
        </div>
        <br />
        <div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <label htmlFor="password">Password</label>
        </div>
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default App;
