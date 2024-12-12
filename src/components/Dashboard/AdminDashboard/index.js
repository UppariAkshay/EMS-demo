import { useContext, useEffect, useState } from 'react'
import './index.css'
import Header from '../../Header'
import {AuthContext} from '../../../LocalStorage'

const AdminDashboard = ({handleLogout, data}) => {

    // const [employeesData, setEmployeesData] = useState(data)

    const [taskTitle, setTaskTitle] = useState()
    const [date, setDate] = useState()
    const [assignTo, setAssignTo] = useState()
    const [category, setCategory] = useState()
    const [description, setDescription] = useState()

    const [adminDetails, setAdminDetails] = useState(JSON.parse(localStorage.getItem('loggedInUser')))
    const [registeredEmployees, registeredAdmin, setRegisteredEmployees, setRegisteredAdmin] = useContext(AuthContext)

    // useEffect(() => {
    //     setEmployeesData(data)
    // }, [data])

    const getEmployeeInfo = (employeeInfo) => {
        return <tr>
        <th scope="row">{employeeInfo.firstName}</th>
        <td>{employeeInfo.taskCounts.newTask}</td>
        <td>{employeeInfo.taskCounts.active}</td>
        <td>{employeeInfo.taskCounts.completed}</td>
        <td>{employeeInfo.taskCounts.failed}</td>
        </tr>
    }

    const createNewTask = (e) => {
        e.preventDefault()
        const newTaskObj = {active: false, category: category, completed: false, failed: false, newTask: true, taskDate: date, taskDescription: description, taskTitle: taskTitle}

        if (assignTo)
        {
            setRegisteredEmployees(data.map(eachEmployee => eachEmployee.firstName.toLowerCase() === assignTo.toLowerCase() ? {...eachEmployee, taskCounts: {...eachEmployee.taskCounts, newTask: eachEmployee.taskCounts.newTask + 1}, tasks: [...eachEmployee.tasks, newTaskObj]} : {...eachEmployee}))
        }

        setAdminDetails('')
        setAssignTo('')
        setCategory('')
        setDate('')
        setDescription('')
        setTaskTitle('')
    }

    // const createNewTask = (e) => {
    //     e.preventDefault();
    //     const newTaskObj = {
    //       active: false,
    //       category: category,
    //       completed: false,
    //       failed: false,
    //       newTask: true,
    //       taskDate: date,
    //       taskDescription: description,
    //       taskTitle: taskTitle,
    //     };
      
    //     if (assignTo) {
    //       // Update the employee's tasks and task counts
    //       setRegisteredEmployees((prevEmployees) =>
    //         prevEmployees.map((eachEmployee) =>
    //           eachEmployee.firstName.toLowerCase() === assignTo.toLowerCase()
    //             ? {
    //                 ...eachEmployee,
    //                 taskCounts: { ...eachEmployee.taskCounts, newTask: eachEmployee.taskCounts.newTask + 1 },
    //                 tasks: [...eachEmployee.tasks, newTaskObj],
    //               }
    //             : eachEmployee
    //         )
    //       );
      
    //       // Save the updated employees to localStorage so that `App` can access the new state
    //       const updatedEmployees = [...employeesData]; // assuming `employeesData` is the current state of employees
    //       localStorage.setItem('authData', JSON.stringify({ registeredEmployees: updatedEmployees}));
    //     }
      
    //     setAdminDetails('');
    //     setAssignTo('');
    //     setCategory('');
    //     setDate('');
    //     setDescription('');
    //     setTaskTitle('');
    //   };
      
    
    console.log(data, 'data')

    return (
        <div className='adminDashBoardMainContainerDIV'>
            <Header handleLogout={(e) => handleLogout(e)} />
            <form onSubmit={createNewTask} className='createNewTaskFORM'>
                {/* <div> */}
                    <div className='inputAndLabelContainerDIV'>
                        <label className='form-label' htmlForm='taskTitle'>Task Title</label>
                        <input onChange={(e) => setTaskTitle(e.target.value) } id='taskTitle' className='form-control inputElement' type='text' placeholder='Enter Task Title'/>
                    </div>
                    <div className='inputAndLabelContainerDIV'>
                        <label className='form-label' htmlForm='taskTitle'>Date</label>
                        <input onChange={(e) => setDate(e.target.value) } id='taskTitle' className='form-control' type='date' placeholder='dd/mm/yyy'/>
                    </div>
                    <div className='inputAndLabelContainerDIV'>
                        <label className='form-label' htmlForm='taskTitle'>Assign to</label>
                        <input onChange={(e) => setAssignTo(e.target.value)} id='taskTitle' className='form-control' type='text' placeholder='Employee Name'/>
                    </div>
                    <div className='inputAndLabelContainerDIV'>
                        <label className='form-label' htmlForm='taskTitle'>Category</label>
                        <input onChange={(e) => setCategory(e.target.value)} id='taskTitle' className='form-control' type='text' placeholder='Design, Dev, etc.'/>
                    </div>
                {/* </div> */}
                <div className='inputAndLabelContainerDIV'>
                    <label>Description</label>
                    <textarea onChange={(e) => setDescription(e.target.value)} className='descriptionTEXTAREA form-control'></textarea>
                    <button type='submit' className='w-100 mt-3 btn btn-success'>Create Task</button>
                </div>
            </form>

            <table class="table table-dark mt-4">
                <thead>
                    <tr>
                    <th scope="col">Employee Name</th>
                    <th scope="col">New Task</th>
                    <th scope="col">Active Task</th>
                    <th scope="col">Completed</th>
                    <th scope="col">Failed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(eachEmployee => getEmployeeInfo(eachEmployee))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AdminDashboard