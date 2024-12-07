import './index.css'
import Header from '../../Header'

const EmployeeDashboard = ({data}) => {
    return (
        <div className='employeeDashboardMainContainerDIV'>
            <Header name={data.firstname} />
            <ul className='tasksCardsContainerUL'>
                <li className='TastcardLI text-bg-danger'>
                    <p>0</p>
                    <p>New Task</p>
                </li>
                <li className='TastcardLI text-bg-primary'>
                    <p>0</p>
                    <p>New Task</p>
                </li>
                <li className='TastcardLI text-bg-success'>
                    <p>0</p>
                    <p>New Task</p>
                </li>
                <li className='TastcardLI text-bg-warning'>
                    <p>0</p>
                    <p>New Task</p>
                </li>
            </ul>
            <ul className='tasksListContainerUL'>
                <li className='taskLI'>
                    <div className='priorityAndDateContainerDIV'>
                        <p className='taskPrioirityP'>High</p>
                        <p>Date</p>
                    </div>
                    <h1>Task Name</h1>
                    <p>Task Description</p>
                </li>
                <li className='taskLI'>
                    <div className='priorityAndDateContainerDIV'>
                        <p className='taskPrioirityP'>High</p>
                        <p>Date</p>
                    </div>
                    <h1>Task Name</h1>
                    <p>Task Description</p>
                </li><li className='taskLI'>
                    <div className='priorityAndDateContainerDIV'>
                        <p className='taskPrioirityP'>High</p>
                        <p>Date</p>
                    </div>
                    <h1>Task Name</h1>
                    <p>Task Description</p>
                </li><li className='taskLI'>
                    <div className='priorityAndDateContainerDIV'>
                        <p className='taskPrioirityP'>High</p>
                        <p>Date</p>
                    </div>
                    <h1>Task Name</h1>
                    <p>Task Description</p>
                </li><li className='taskLI'>
                    <div className='priorityAndDateContainerDIV'>
                        <p className='taskPrioirityP'>High</p>
                        <p>Date</p>
                    </div>
                    <h1>Task Name</h1>
                    <p>Task Description</p>
                </li><li className='taskLI'>
                    <div className='priorityAndDateContainerDIV'>
                        <p className='taskPrioirityP'>High</p>
                        <p>Date</p>
                    </div>
                    <h1>Task Name</h1>
                    <p>Task Description</p>
                </li><li className='taskLI'>
                    <div className='priorityAndDateContainerDIV'>
                        <p className='taskPrioirityP'>High</p>
                        <p>Date</p>
                    </div>
                    <h1>Task Name</h1>
                    <p>Task Description</p>
                </li><li className='taskLI'>
                    <div className='priorityAndDateContainerDIV'>
                        <p className='taskPrioirityP'>High</p>
                        <p>Date</p>
                    </div>
                    <h1>Task Name</h1>
                    <p>Task Description</p>
                </li><li className='taskLI'>
                    <div className='priorityAndDateContainerDIV'>
                        <p className='taskPrioirityP'>High</p>
                        <p>Date</p>
                    </div>
                    <h1>Task Name</h1>
                    <p>Task Description</p>
                </li><li className='taskLI'>
                    <div className='priorityAndDateContainerDIV'>
                        <p className='taskPrioirityP'>High</p>
                        <p>Date</p>
                    </div>
                    <h1>Task Name</h1>
                    <p>Task Description</p>
                </li><li className='taskLI'>
                    <div className='priorityAndDateContainerDIV'>
                        <p className='taskPrioirityP'>High</p>
                        <p>Date</p>
                    </div>
                    <h1>Task Name</h1>
                    <p>Task Description</p>
                </li>
                
            </ul>
        </div>
    )
}

export default EmployeeDashboard