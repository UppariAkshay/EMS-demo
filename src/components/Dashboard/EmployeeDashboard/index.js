import './index.css'
import Header from '../../Header'

const EmployeeDashboard = ({handleLogout}) => {

    const {userData} = JSON.parse(localStorage.getItem('loggedInUser'))

    const displayTaskCard = (taskInfo) => {
        return (
            <li className='taskLI'>
                <div className='priorityAndDateContainerDIV'>
                    <p className='taskPrioirityP'>High</p>
                    <p>{taskInfo.taskDate}</p>
                </div>
                <h1>{taskInfo.taskTitle}</h1>
                <p>{taskInfo.taskDescription}</p>
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