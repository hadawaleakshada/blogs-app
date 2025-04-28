import { useNavigate } from "react-router-dom";

function Header() {
    const navigate=useNavigate();
    const gotoHomePage=()=>{
        navigate('/')
    }
    const gotoLoginPage=()=>{
        navigate('/Login')
    }
    const gotoRegisterPage=()=>{
        navigate('/Register')
    }
    

    return (

            
            <div className="bg-indigo-900 flex-auto m-0 text-white flex justify-between text-xl font font-bold
            ali items-center p-3">
                <div className="pl-4 cursor-pointer " onClick={gotoHomePage} >Blogs</div>
                <div className="text-base flex justify-between pr-4">
                    <div className="pr-3 cursor-pointer" onClick={gotoLoginPage}  >Login</div>
                    <div  className="cursor-pointer " onClick={gotoRegisterPage} >Register</div>
                </div>
            </div>
            
            
        
        
    )
}
export default Header;