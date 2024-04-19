import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './style/App.scss'
import LoginPage from './pages/LoginPage'

const App = () => {

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/login' element={<LoginPage />} />
                </Routes>
            </Router>
            
        </>
    )
}

export default App
