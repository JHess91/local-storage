import { useEffect, useState } from 'react';
import { Login } from './Login';
import './App.css';

// sessionStorage - clears on browser/tab close

// localStorage - clears manually

// Javascript method (not only in react)



function App() {
  const [username, setUsername] = useState('')

  useEffect(() => {
    const username = localStorage.getItem('username')
    setUsername(username)
  }, [])

  function addItemsLS() {
    localStorage.setItem('username', 'Justin112')
    localStorage.setItem('password', 'password123')
    localStorage.setItem('email', 'hessler.justin91@gmail.com')
  }

  function removeItemLS() {
    localStorage.removeItem('username')
    localStorage.removeItem('password')
  }

  function addItemsSS() {
    sessionStorage.setItem('username', 'ashley1001')
    sessionStorage.setItem('password', 'password321')
    sessionStorage.setItem('email', 'magnus.ashley96@gmail.com')
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>LocalStorage and SessionStorage</h1>
        <p>Welcome {username}!</p>
        <button onClick={addItemsLS}>Add</button>
        <br />
        <button onClick={removeItemLS}>Remove</button>
        <br />
        <button onClick={addItemsSS}>Add SS</button>
        <br />
        <Login />
      </header>
    </div>
  );
}

export default App;
