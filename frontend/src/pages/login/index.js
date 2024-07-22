import React from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import styles from './styles' // Import the styles from the same directory

const Login = () => {
  const navigate = useNavigate()

  const HandleAdminLogin = () => {
    navigate('/admindashboard')
  }

  const HandleUserLogin = () => {
    navigate('/userdashboard')
  }

  return (
    <div style={styles.container}>
      <div>
        <h1 style={styles.title}>Login</h1>
        <Button variant='contained' color='primary' onClick={HandleAdminLogin}>
          Admin Login
        </Button>
        <Button variant='contained' color='primary' onClick={HandleUserLogin}>
          User Login
        </Button>
      </div>
    </div>
  )
}

export default Login
