import './index.css'

const Header = (props) => {

    const {handleLogout} = props
    const loggedInUserData = JSON.parse(localStorage.getItem('loggedInUser'))

    const onClickLogout = () => {
        handleLogout()
    }

    return(
        <div className='headerDIV'>
            <h1>Hey, {loggedInUserData.userName} </h1>
            <button onClick={onClickLogout} className='btn btn-danger'>Logout</button>
        </div>
    )
}

export default Header