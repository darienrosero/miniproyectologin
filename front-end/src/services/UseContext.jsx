import axios from "axios";
import { createContext, useEffect, useState } from "react";

const UseContext = createContext()

const UseProvider = ({ children }) => {
    const token = localStorage.getItem('token')
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (token) {
            axios.get('http://localhost:3000/api/auth/dashboard', { headers: { Authorization: token } })
                .then(res => {
                    setUser(res.data)
                })
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        }
    }, [token])


    return (
        <UseContext.Provider value={{ user, loading }}>
            {children}
        </UseContext.Provider>
    )
}

export { UseContext, UseProvider }
