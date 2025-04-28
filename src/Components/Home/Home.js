import { useNavigate } from "react-router-dom";

function Home() {
    const navigate=useNavigate();
    const gotoLogin=()=>{
        navigate('/Login')
    }
    const gotoRegister=()=>{
        navigate('/Register')
    }
    return (
        
        <div className="bg-gray-300 h-screen" >
           
            <div className="flex justify-center ">
            <div className="bg-gray-100 w-[90%] sm:w-[55%] sm: mt-7 p-4 rounded-md shadow-xl">
                <div className="font-bold text-3xl mb-3">Blogs !</div>
                <div>Publish your passions,your way...</div>
                <hr className="border-2 border-gray-400"></hr>
                <div className="flex justify-end mt-5 mb-10">
                    <button className="bg-indigo-900 border-none rounded-md p-1 pr-3 active:bg-indigo-600 pl-3 text-white font-medium mr-4 cursor-pointer" onClick={gotoLogin} >Login</button>
                    <button className="bg-indigo-900 border-none rounded-md p-1 pr-3 active:bg-indigo-600 pl-3 text-white font-medium cursor-pointer"  onClick={gotoRegister} >Register</button>
                </div>
            </div>
            </div>
        </div>



    )
}
export default Home;