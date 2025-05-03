import React from 'react'
import Button from '../components/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Import useNavigate

function Login() {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const navigate = useNavigate() // Initialize navigate

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    console.log("Username:", username)
    console.log("Password:", password)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
    console.log("Username:", e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    console.log("password:", e.target.value)
  }

  const goToBMI = () => {
    navigate('/bmi') // Redirect to BMI page
  }

  return (
    <>
      <div>This is login page</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <button onClick={goToBMI}>Go to BMI</button> {/* Button to navigate */}
      <br />
    </>
  )
}

export default Login