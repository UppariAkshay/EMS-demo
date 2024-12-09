import './App.css';
import Login from './components/Login' 
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './LocalStorage';
import { useEffect, useContext, useState } from 'react';
import {AuthContext} from './context/AuthContext'
import {TailSpin }  from 'react-loader-spinner'

const userLoginConstants = {
  noLogin: 'NO LOGIN',
  employeeLogin: 'EMPLOYEE LOGIN',
  adminLogin: 'ADMIN LOGIN',
}

function App() {

  const [loginStatus, setloginStatus] = useState(userLoginConstants.noLogin)
  const [loggedInUserData, setLoggedInUserData] = useState(JSON.parse(localStorage.getItem('loggedInUser')))

  const {employees, admin} = getLocalStorage()

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

    loggedInUser === null ? setloginStatus(userLoginConstants.noLogin) : setloginStatus(loggedInUser.role)

  }, [loginStatus])
  
  const renderView = () => { 

    switch (loginStatus){
      case userLoginConstants.adminLogin:
        return <AdminDashboard handleLogout={handleLogout} data={loggedInUserData} />
        break
      case userLoginConstants.employeeLogin:
        return <EmployeeDashboard handleLogout={handleLogout} data={loggedInUserData} />
        break
      case userLoginConstants.noLogin:
        return <Login handleLogin={handleLogin} />
        break
      default:
        break
    }
  }

  const handleLogin = (email, password) => {
    const {employees, admin} = getLocalStorage()

    const isEmployye = employees.find(eachEmployee => eachEmployee.email === email && eachEmployee.password === password)
    const isAdmin = admin.find(eachAmin => eachAmin.email === email && eachAmin.password === password)
    
    if (isEmployye)
    {
      localStorage.setItem('loggedInUser', JSON.stringify({userData: isEmployye, role: userLoginConstants.employeeLogin}))
      setLoggedInUserData(isEmployye)
      setloginStatus(userLoginConstants.employeeLogin)
    }
    else if (isAdmin)
    {
      localStorage.setItem('loggedInUser', JSON.stringify({userData: isAdmin, role: userLoginConstants.adminLogin}))
      setLoggedInUserData(isAdmin)
      setloginStatus(userLoginConstants.adminLogin)
      
    }
    else{
      alert('Invalid Credentials')
    }
    
  }

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser')
    setloginStatus(userLoginConstants.noLogin)
  }


  return (
    <div>
      {
        renderView()
      }
    </div>
  )
      
}

export default App;
