import { useState } from "react"
import myProfile from "../assets/icons8-male-user-24.png"
import chat from "../assets/icons8-people-24.png"
import logOut from "../assets/icons8-log-out-24.png"
import arrow from "../assets/icons8-arrow.png"

function EditInfo() {

    const [menuClick, setMenuClick] = useState(false)

    const handleClick = () => {
        setMenuClick(prevState => !prevState)
    }

    return (
        <>

            <nav className="flex w-full justify-end p-6 font-noto sans ">
                <ul className={`${menuClick ? 'flex' : 'hidden'} absolute flex-col mt-6 border border-gray-400 p-[16px] w-[188px] h-[174px]  top-[32px] place-content-around rounded-xl `} >
                    <li className="flex gap-4 cursor-pointer"><img src={myProfile} /> My Profile </li>
                    <li className="flex gap-4 cursor-pointer"><img src={chat} /> Group Chat </li>
                    <hr className="border-t-2 border-gray-300 my-4 cursor-pointer"></hr>
                    <li className="flex gap-4 text-red-custom cursor-pointer"><img src={logOut} /> Logout </li>
                </ul>
                <div onClick={handleClick} className="flex gap-4 cursor-pointer">
                    <img src={myProfile} />
                    <p className="font-bold">
                        darien jeol
                    </p>
                </div>

            </nav>
           <div className="absolute right-0 left-0 mx-auto w-[800px] h-[980px] mb-6 font-noto sans ">
           <button className="mb-4 flex text-sky-custom text-[24px] items-center "> <img src={arrow} /> Back </button>
            <div className=" border border-gray-400 w-[800px] h-[827px] rounded-xl p-6 px-8 flex flex-col justify-around ">
                <h1 className="text-[32px] "> Change Info </h1>
                <p className="text-gray-500"> Changes will be reflected to every services </p>

                <div className="flex items-center gap-4">
                    <div className="flex gap-4 w-[72px] h-[72px] rounded-xl bg-gray-600 justify-center">
                        <img src={myProfile} />
                    </div>
                        <p className="text-gray-500"> CHANGE PHOTO </p>
                </div>

                <div className="flex flex-col gap-4">
                <label>Name</label>
                <input type="text" className="border border-gray-400 rounded-xl h-[40px] p-4 text-[16px] " />
                <label>Bio</label>
                <input type="text" className="border border-gray-400 rounded-xl h-[90px] p-4 text-[16px] " />
                <label>Phone</label>
                <input type="text" className="border border-gray-400 rounded-xl h-[40px] p-4 text-[16px] " />
                <label>Email</label>
                <input type="text" className="border border-gray-400 rounded-xl h-[40px] p-4 text-[16px] " />
                <label>Password</label>
                <input type="text" className="border border-gray-400 rounded-xl h-[40px] p-4 text-[16px] " />
                </div>


            <button className="w-[82px] h-[38px] bg-sky-custom text-white rounded-lg ">Save</button>
            </div>
           </div>

        </>
    )
}

export default EditInfo

