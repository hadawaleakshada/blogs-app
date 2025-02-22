import './Login.css'
function Login(){
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
                <div className='section10' >Blogs</div>
                <div className='section11'>Publish your passions,your way...</div>
                <hr className='hr'/>
                <div className='header'>Login</div>
                <label className='l1'>Email id</label><br/>
                <input className='inputfield' type='text' placeholder='test@gmail.com'/><br/>
                <label className='l1'>Password</label><br/>
                <input className='inputfield' type='password' placeholder='test@123'/><br/>
                <button className='btn'>Login</button>

            </div>
        </div> 
           
    )
}
export default Login;