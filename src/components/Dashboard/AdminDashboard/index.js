import './index.css'
import Header from '../../Header'

const AdminDashboard = ({data}) => {
    console.log(data.firstname, 'admin data')
    return (
        <div className='adminDashBoardMainContainerDIV'>
            <Header name={data.firstname} />
            <form className='createNewTaskFORM'>
                <div className='inputAndLabelContainerDIV'>
                    <label className='form-label' htmlForm='taskTitle'>Task Title</label>
                    <input id='taskTitle' className='form-control' type='text' placeholder='Enter Task Title'/>
                </div>
                <div className='inputAndLabelContainerDIV'>
                    <label className='form-label' htmlForm='taskTitle'>Date</label>
                    <input id='taskTitle' className='form-control' type='date' placeholder='dd/mm/yyy'/>
                </div>
                <div className='inputAndLabelContainerDIV'>
                    <label className='form-label' htmlForm='taskTitle'>Assign to</label>
                    <input id='taskTitle' className='form-control' type='text' placeholder='Employee Name'/>
                </div>
                <div className='inputAndLabelContainerDIV'>
                    <label className='form-label' htmlForm='taskTitle'>Category</label>
                    <input id='taskTitle' className='form-control' type='text' placeholder='Design, Dev, etc.'/>
                </div>
                <div className='inputAndLabelContainerDIV'>
                    <label>Description</label>
                    <textarea className='descriptionTEXTAREA form-control'></textarea>
                    <button className='w-100 mt-3 btn btn-success'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default AdminDashboard