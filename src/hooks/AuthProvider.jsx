import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async(loginData) => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/login', loginData);
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token)
            navigate('/dashboard');
        } catch (e) {
            setError(e.response.data.token);
        }
    }

    const handleRegistration = async(registrationData) => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/register', registrationData);
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard')
        } catch (e) {
            console.log(e);
        }
    }

    return <AuthContext.Provider value={{user, token, error, handleLogin, handleRegistration}}>{ children }</AuthContext.Provider>
}

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}