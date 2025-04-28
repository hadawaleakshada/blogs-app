import { useNavigate } from "react-router-dom";

function Login() {
    const navigate=useNavigate();
    const gotoDisplay=()=>{
        navigate('/Display')
    }
    return (
        <div className="bg-gray-300 h-screen" >
            <div className="flex justify-center">
            <div className="bg-gray-200 mt-7  w-80 p-4 rounded-md shadow-2xl">
                <div className="font-bold text-3xl mb-3">Blogs !</div>
                <div>Publish your passions,your way...</div>
                <hr className="border-2 border-gray-400"></hr>
                <div className="text-center text-3xl mt-5  mb-5 font-bold text-indigo-900">Login</div>
                <label >Email id</label><br />
                <input className="w-72 p-2 focus:ring-indigo-900 mb-4 mt-1 text-xs rounded-md" type="text" placeholder="test@gmail.com" /><br />
                <label >Password</label><br />
                <input className="w-72  focus:ring-indigo-900  p-2 text-xs mt-1 mb-4 rounded-md" type="text" placeholder="Test@123" /><br />
                <button className="bg-indigo-900 text-lg p-1 w-72 mb-20 mt-4 text-white rounded-md " onClick={gotoDisplay}>Login</button>

            </div>
            </div>
        </div>
    )
}
export default Login;