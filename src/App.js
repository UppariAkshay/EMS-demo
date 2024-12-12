import './App.css';
import Login from './components/Login' 
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useEffect, useContext, useState } from 'react';
import {AuthContext} from './LocalStorage'

const userLoginConstants = {
  noLogin: 'NO LOGIN',
  employeeLogin: 'EMPLOYEE LOGIN',
  adminLogin: 'ADMIN LOGIN',
}

function App() {

  const [loginStatus, setloginStatus] = useState(userLoginConstants.noLogin)

  const [registeredEmployees, registeredAdmin,setRegisteredEmployees, setRegisteredAdmin] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

    console.log('useeffect app component')

    // fetchAuthData()

    loggedInUser === null ? setloginStatus(userLoginConstants.noLogin) : setloginStatus(loggedInUser.role)

  }, [])

  
  const renderView = () => {

    switch (loginStatus){
      case userLoginConstants.adminLogin:
        return <AdminDashboard handleLogout={handleLogout} data={registeredEmployees} />
        break
      case userLoginConstants.employeeLogin:
        return <EmployeeDashboard handleLogout={handleLogout} />
        break
      case userLoginConstants.noLogin:
        return <Login handleLogin={handleLogin} />
        break
      default:
        break
    }
  }

  const handleLogin = (email, password) => {

    const isEmployye = registeredEmployees.find(eachEmployee => eachEmployee.email === email && eachEmployee.password === password)
    const isAdmin = registeredAdmin.find(eachAmin => eachAmin.email === email && eachAmin.password === password)
    
    if (isEmployye)
    {
      localStorage.setItem('loggedInUser', JSON.stringify({employeesData: isEmployye, role: userLoginConstants.employeeLogin, userName: isEmployye.firstName}))
      // setLoggedInUserData(isEmployye)
      setloginStatus(userLoginConstants.employeeLogin)
    }
    else if (isAdmin)
    {
      localStorage.setItem('loggedInUser', JSON.stringify({employeesData: registeredEmployees, role: userLoginConstants.adminLogin, userName: isAdmin.firstName}))
      // setLoggedInUserData(isAdmin)
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