import axios from 'axios'
import latter from '../assets/icons8-letter.gif'
import lock from '../assets/icons8-lock.gif'
import { useNavigate } from 'react-router-dom'

function Register() {

    const navegate = useNavigate()

    const handlerRegister = async (e) => {
        e.preventDefault()

        const data = {
            username: e.target[0].value,
            password: e.target[1].value
        }

        try {
            const res = await axios.post('http://localhost:3000/api/auth/register', data)
            alert(res.data.message)
            navegate('/')
        } catch (error) {
            alert(error.response.data.message)
            if (error.response) {
                console.error('Error de respuesta del servidor:', error.response.data);
            } else if (error.request) {
                console.error('No se recibió respuesta del servidor:', error.request);
            } else {
                console.error('Error al configurar la solicitud:', error.message);
            }
        }
    }

    const login = async () => {
        navegate('/')
    }

    return (
        <div className='right-0 left-0 mx-auto mt-28  flex flex-col justify-between w-[373px] h-[400px] gap-2 p-8 border border-gray-400 rounded-2xl font-noto sans '>
            <p className='text-[14px] font-bold '>
                Join thousands of learners from around the world
            </p>
            <p className='text-[14px] '>
                Master web development by making real-life projects. There are multiple paths for you to choose
            </p>

            <form onSubmit={handlerRegister}>
                <div className='flex border border-gray-400  '>
                    <img src={latter} />
                    <input type="text" placeholder="Email" className='border-none focus:outline-none' />
                </div>

                <div className='flex border border-gray-400 mt-4 '>
                    <img src={lock} />
                    <input type="password" placeholder="Password" className='border-none focus:outline-none' />
                </div>

                <button type='submit' className='text-[14px] text-white bg-sky-500 w-full mt-4'>
                    Start coding now
                </button>
            </form>

            <p className='text-[14px] text-center '>
                or continue with these social profile
            </p>

            <div className='flex justify-center'>
                <div><img src="" />a</div>
                <div><img src="" />a</div>
                <div><img src="" />a</div>
                <div><img src="" />a</div>
            </div>

            <div className='flex justify-center'>
                <p className='text-[14px] text-center '> Adready a member? </p>
                <p onClick={login} className='text-sky-custom cursor-pointer'>Login</p>
            </div>
        </div>
    )
}

export default Register
