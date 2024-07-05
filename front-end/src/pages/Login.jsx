import axios from 'axios'
import latter from '../assets/icons8-letter.gif'
import lock from '../assets/icons8-lock.gif'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const navegate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    const data = {
      username: e.target[0].value,
      password: e.target[1].value
    }

    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', data)
      localStorage.setItem("token", res.data.token)
      alert(res.data.message)
      navegate('/dashboard')
    } catch (error) {
      if (error.response) {
        console.error('Error de respuesta del servidor:', error.response.data);
      } else if (error.request) {
        console.error('No se recibió respuesta del servidor:', error.request);
      } else {
        console.error('Error al configurar la solicitud:', error.message);
      }
    }
  }

  const register = async () => {
    navegate('/register')
  }

  return (
    <>
      <div className=' right-0 left-0 mx-auto mt-28 flex flex-col justify-between w-[373px] h-[400px] gap-2 p-8 border border-gray-400 rounded-2xl font-noto sans '>

        <h1 className='text-[25px] font-bold '>Login</h1>

        <form onSubmit={handleLogin}>
          <div className='flex border border-gray-400 h-[48px] items-center gap-3 p-3 rounded-lg  '>
            <img src={latter} className='w-[20px] h-[20px] ' />
            <input type="text" placeholder="Email" className='border-none focus:outline-none' />
          </div>

          <div className='flex border border-gray-400 h-[48px] items-center gap-3 p-3 mt-4 rounded-lg '>
            <img src={lock} className='w-[20px] h-[20px] ' />
            <input type="password" placeholder="Password" className='border-none focus:outline-none' />
          </div>

          <button type='submit' className='text-[14px] text-white bg-sky-500 w-full mt-4 h-[38px] rounded-lg '>
            Login
          </button>
        </form>

        <p className='text-[14px] text-center '>
          or continue with these social profile
        </p>

        <div className='flex justify-center items-center'>
          <div><img src="" />a</div>
          <div><img src="" />a</div>
          <div><img src="" />a</div>
          <div><img src="" />a</div>
        </div>

        <div className='flex justify-center'>
          <p className='text-[14px] flex'>
            Don’t have an account yet?
          </p>
          <p onClick={register} className='text-sky-custom cursor-pointer'>Register</p>
        </div>
      </div>
    </>
  )
}
