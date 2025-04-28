import { useNavigate } from "react-router-dom";

function BlogsTitle() {
    const navigate=useNavigate();
    const GotoDisplayPage=()=>{
        navigate('/Display')
    }
    return (
        <div className="bg-gray-300 h-screen" >
            {/* <div className="bg-indigo-900 flex-auto text-white flex justify-between text-xl font font-bold
        align items-center p-3">
                <div className="pl-14">Blogs</div>
                <div className="text-base flex justify-between pr-14 text align items-center">
                    <div className="pr-5">AkshadaHadawale</div>
                    <i class="fa fa-arrow-circle-o-right pr-5" aria-hidden="true"></i>
                    <div>Logout</div>
                </div>
            </div> */}
            <div className="flex justify-center">
            <div className="w-[75%] p-5 bg-white mt-5 shadow-xl rounded-md">
                <div className="w-[100%]">
                    <input type="text" className="w-[100%] p-3 border-b-2 border-gray-400 text-4xl font-bold" placeholder="Title" />
                </div>
                <div className="w-[100%]">
                    <textarea className="w-[100%] border-gray-500 border-2  rounded-md mt-2 text-gray-600 text-base p-3" rows={10}>Description</textarea>
                </div>
                <div className="flex justify-end">
                <button className="bg-indigo-900 text-white p-2 rounded-md font-semibold" onClick={GotoDisplayPage}>Cancel</button>
                <button className="bg-indigo-900 text-white p-2 rounded-md font-semibold ml-5" onClick={GotoDisplayPage}>Save</button>
                </div>
            </div>
            </div>

        </div>
    )
}
export default BlogsTitle;