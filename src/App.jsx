import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './style/App.scss'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import AuthProvider from './hooks/AuthProvider.jsx'
import PrivateRoute from './router/PrivateRoute.jsx'
import RegistrationPage from './pages/RegistrationPage.jsx'

const App = () => {

    return (
        <>
        <Router>
            <AuthProvider>
                    <Routes>
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/register' element={<RegistrationPage />} />
                        <Route element={<PrivateRoute />}>
                            <Route path='*' element={<Navigate to='/dashboard' replace />} />
                            <Route path='/dashboard' element={<Dashboard />} />
                        </Route>

                    </Routes>
            </AuthProvider>
        </Router>
        </>
    )
}

export default App
