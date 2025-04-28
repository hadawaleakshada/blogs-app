import { useNavigate } from "react-router-dom";

function Register() {
    const navigate=useNavigate();
    const Login=()=>{
        navigate('/Login')
    }
    return (
        <div className="h-screen sm:100vh m-0 bg-gray-300">
            <div className="flex justify-center">
            <div className="bg-gray-200 mt-7  w-80 p-4 rounded-md shadow-xl">
                <div className="font-bold text-3xl mb-3">Blogs !</div>
                <div>Publish your passions,your way...</div>
                <hr className="border-2 border-gray-400"></hr>
                <div className="text-center text-2xl mt-5 font-bold text-indigo-900">Register</div>
                <label >Name</label><br/>
                <input className="w-72  p-2 mb-4 mt-1 rounded-md text-xs" type="text" placeholder="FirstName LastName "/><br/>
                <label >Email id</label><br/>
                <input className="w-72  p-2 mb-4 mt-1 text-xs rounded-md" type="text" placeholder="test@gmail.com"/><br/>
                <label >Password</label><br/>
                <input className="w-72 p-2 text-xs mt-1 mb-4 rounded-md" type="text" placeholder="Test@123"/><br/>
                <button className="bg-indigo-900 text-lg p-1 w-72 mb-14 mt-7 text-white rounded-md underline " onClick={Login}>Register</button>
            </div>
            </div>
        </div>
    )
}
export default Register;    