import { useContext, useState } from "react"
import myProfile from "../assets/icons8-male-user-24.png"
import chat from "../assets/icons8-people-24.png"
import logOut from "../assets/icons8-log-out-24.png"
import { Navigate } from "react-router-dom"
import { UseContext } from "../services/UseContext"

function Dashboard() {

    const [menuClick, setMenuClick] = useState(false)
    const { user, loading } = useContext(UseContext)

    if (loading){
        return <p> CARGANDO INFORMACIO... </p>
    }

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
                <div className="text-center mb-4 ">
                    <h1 className="text-[36px] ">Personal Info</h1>
                    <p className="text-[18px] text-gray-500 ">Basic info, like your name and photo</p>
                </div>
                <div className="border border-gray-400  w-[800px] h-[500px] ">

                    <div className="border border-gray-500 h-[100px] ">

                    </div>

                    <p>nombre: {user?.nombres} </p>
                    <p>apellidos: {user?.apellidos} </p>
                    <p>phone: {user?.phone} </p>
                    <p>email: {user?.username} </p>
                    <p>password: ********* </p>
                </div>
            </div>

        </>
    )
}

export default Dashboard
