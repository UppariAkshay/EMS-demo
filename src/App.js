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
  loading: 'LOADING'
}

function App() {

  const [loginStatus, setloginStatus] = useState(userLoginConstants.loading)
  const [loggedInUserData, setLoggedInUserData] = useState()

  const {employees, admin} = getLocalStorage()

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
    
    setLoggedInUserData(loggedInUser)

    loggedInUser === null ? setloginStatus(userLoginConstants.noLogin) : setloginStatus(loggedInUser.role)

  }, [loginStatus])
  
  const renderView = () => {
    console.log(loggedInUserData, 'logged in usr data')

    switch (loginStatus){
      case userLoginConstants.adminLogin:
        return <AdminDashboard data={loggedInUserData.userData[0]} />
        break
      case userLoginConstants.employeeLogin:
        return <EmployeeDashboard data={loggedInUserData.userData[0]} />
        break
      case userLoginConstants.noLogin:
        return <Login handleLogin={handleLogin} />
        break
      case userLoginConstants.loading:
        return <TailSpin />
      default:
        break
    }
  }

  const handleLogin = (email, password) => {
    const {employees, admin} = getLocalStorage()

    const isEmployye = employees.filter(eachEmployee => eachEmployee.email === email && eachEmployee.password === password)
    const isAdmin = admin.filter(eachAmin => eachAmin.email === email && eachAmin.password === password)

    console.log(isAdmin, 'admin')
    
    if (isEmployye.length > 0)
    {
      setloginStatus(userLoginConstants.employeeLogin)
      setLoggedInUserData(isEmployye)
      localStorage.setItem('loggedInUser', JSON.stringify({userData: isEmployye, role: userLoginConstants.employeeLogin}))
    }
    else if (isAdmin.length > 0)
    {
      setloginStatus(userLoginConstants.adminLogin)
      setLoggedInUserData(isAdmin)
      localStorage.setItem('loggedInUser', JSON.stringify({userData: isAdmin, role: userLoginConstants.adminLogin}))
    }
    else{
      alert('Invalid Credentials')
    }
    
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
