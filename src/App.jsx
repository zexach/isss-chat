import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './style/App.scss'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import { useAuth } from './hooks/AuthProvider.jsx'
import AuthProvider from './hooks/AuthProvider.jsx'
import PrivateRoute from './router/PrivateRoute.jsx'

const App = () => {

    return (
        <>
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route path='/login' element={<LoginPage />} />
                        <Route element={<PrivateRoute />}>
                            <Route path='/dashboard' element={<Dashboard />} />
                        </Route>
                    </Routes>
                </Router>
            </AuthProvider>
        </>
    )
}

export default App
