import './index.css'

const Header = ({name}) => {
    return(
        <div className='headerDIV'>
            <h1>Hey {name}, </h1>
            <button className='btn btn-danger'>Logout</button>
        </div>
    )
}

export default Header