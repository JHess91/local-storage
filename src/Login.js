import { useEffect } from "react"
import { useState } from "react"

export const Login = () => {
const [form, setForm] = useState({})
const [email, setEmail] = useState('')

useEffect(() => {
  const user = localStorage.getItem('user')

  if(user) {
    const formattedUser = JSON.parse(user)
    setEmail(formattedUser.email)
  } else {
    setEmail('user not logged in')
  }

 
}, [])

console.log(form)
// user {email: 'hessler.justin@gmail.com', password: 'password123'}

  function handleLogin() {
    const formattedForm = JSON.stringify(form)
    localStorage.setItem('user', formattedForm)
  }

  return (
    <>


      <h3>Welcome {email}</h3>
      <form action="">
        <label htmlFor="">Email</label>
        <input 
        type="email" 
        placeholder="Email" 
        onChange={e => setForm({...form, email: e.target.value})} />
        <br />
        <label htmlFor="">Password</label>
        <input 
        type="password" 
        placeholder="Password" 
        onChange={e => setForm({...form, password: e.target.value})} />
        <br />
        <button onClick={handleLogin}>Login</button>
      </form>

      <button onClick={() => localStorage.clear()}>Clear LS</button>
    </>
  )
}
