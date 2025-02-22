import './Dashboard.css';
function Dashboard(){
    return(
        <div className="body">
        <div className="navsection">
            <div className="leftnav">Blogs</div>
            <div className="rightnav">
                <span className='login'>Login</span>
                <span>Register</span>
            </div>
        </div>
        <div className='section'>
            <div className='section1'>Blogs!</div>
            <div className='section2'>Publish your passions, your way...</div>
            <hr className='h1'/>
            <div className='buttons'>
                <button className='b1'>Login</button>
                <button className='b2'>Register</button>
            </div>

        </div>
        </div>
    )
}
export default Dashboard;