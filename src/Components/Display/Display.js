import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Display() {
    const navigate=useNavigate();
    const gotoBlogsTitle=()=>{
        navigate('/BlogsTitle')
    }
    const[likes ,setLikes]=useState(0);
    const[disLikes ,setDisLikes]=useState(0);
    const handleLikes=()=>setLikes(likes+1);
    const handleDisLikes=()=>setDisLikes(disLikes+1);


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
            <div className="mt-7 w-[85%]">
                <div className="flex justify-between ">
                    <div className="font-bold text-3xl">Blogs !</div>
                    <div className="bg-indigo-900 w-40 text-white cursor-pointer p-1 pl-2 rounded-md"onClick={gotoBlogsTitle} ><i class="fa fa-plus-circle text-white " aria-hidden="true"></i>
                        Create new post</div>
                </div>
                <div className="mt-2">Publish your passions,your way...</div>
                <hr className="border-gray-400 border-2 mb-2" />
                <div className="bg-gray-200 p-4 shadow-2xl rounded-md">
                <div className="font-bold text-3xl">Hello World</div>
                <div><span className="font-semibold">Created By</span><em className="text-gray-400">akshadahadawale@gmail.com</em></div>
                <div><span className="font-semibold">Created At</span> <em className="text-gray-400">26th Apr,2025</em></div>
                <hr className="border-gray-950" />
                <div className="mb-2 mt-2">Lorem Ipsum is simply dummy text of the printing and -typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <button className="bg-[#168116] text-white p-2 rounded-md" onClick={handleLikes}>
                    <i class="fa fa-thumbs-up pr-2" aria-hidden="true"></i>
                  <span>{likes}</span></button>
                <button className="bg-[yellow] text-white ml-5 p-2 rounded-md" onClick={handleDisLikes}>
                    <i class="fa fa-thumbs-down pr-2" aria-hidden="true"></i>
                  <span>{disLikes}</span></button>
                  </div>


            </div>
            </div>
        </div>
    )
}
export default Display;