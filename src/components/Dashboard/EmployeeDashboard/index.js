import './index.css'
import Header from '../../Header'

const EmployeeDashboard = ({handleLogout}) => {

    const {userData} = JSON.parse(localStorage.getItem('loggedInUser'))


    const displayTaskCard = (taskInfo) => {
        return (
            <li className='taskLI'>
                <div className='priorityAndDateContainerDIV'>
                    <p className='taskPrioirityP'>{taskInfo.category}</p>
                    <p>{taskInfo.taskDate}</p>
                </div>
                <h1>{taskInfo.taskTitle}</h1>
                <p>{taskInfo.taskDescription}</p>
                {taskInfo.active === true && <button id={taskInfo.taskTitle} className='btn btn-success'>Mark as Complete</button>}
                {taskInfo.active === true && <button className='btn btn-danger mt-3'>Mark as Fail</button>}
                {taskInfo.newTask === true && <button className='btn btn-dark'>Start Working</button>}
                {taskInfo.completed === true && <p className='bg bg-primary text-light text-center p-2 rounded-2'>Completed</p>}
            </li>
        )
    }

    return (
        <div className='employeeDashboardMainContainerDIV'>
            <Header handleLogout={handleLogout}/>
            <ul className='tasksCardsContainerUL'>
                <li className='TastcardLI text-bg-danger'>
                    <p>Failed</p>
                    <p>{userData.taskCounts.failed}</p>
                </li>
                <li className='TastcardLI text-bg-primary'>
                    <p>New Tasks</p>
                    <p>{userData.taskCounts.newTask}</p>
                </li>
                <li className='TastcardLI text-bg-success'>
                    <p>Completed Tasks</p>
                    <p>{userData.taskCounts.completed}</p>
                </li>
                <li className='TastcardLI text-bg-warning'>
                    <p>Active</p>
                    <p>{userData.taskCounts.active}</p>
                </li>
            </ul>
            
            <ul className='tasksListContainerUL'>
                {
                    userData.tasks.map(eachTask => displayTaskCard(eachTask))
                }
            </ul>
        </div>
    )
}

export default EmployeeDashboard