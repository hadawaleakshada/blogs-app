import './Register.css'
function Register() {
    return (
        <div className="body">
            <div className="navsection">
                <div className="leftnav">Blogs</div>
                <div className="rightnav">
                    <span className='login'>Login</span>
                    <span>Register</span>
                </div>
            </div>
            <div className='section'>
                <div className='section10'>Blogs</div>
                <div className='section11'>Publish your passions,your way... </div>
                <hr className='hr'/>
                <div className='section12'>Register</div>
                <label className='l1' >Name</label><br/>
                <input className='inputfield'  type='text' placeholder='Firstname Lastname'/><br/>
                <label className='l1'>Email id</label><br/>
                <input className='inputfield' type='text' placeholder='test@gmail.com'/><br/>
                <label className='l1'>Password</label><br/>
                <input className='inputfield' type='text' placeholder='Test@123'/><br/>
                <button className='bt'>Register</button>

            </div>
        </div>
    )
}
export default Register;            