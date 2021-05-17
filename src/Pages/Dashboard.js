import React,{ useState } from 'react'
import { useAuth } from '../context/AuthContext'
import {  useHistory } from 'react-router-dom'
import { Button } from './PagesStyle'

const Dashboard = () => {
    const {currentUser, logout} = useAuth();
    const [error,setError] = useState('')
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try{
            await logout()
            history.pushState('/FormContainer')    
        }
        catch{
            setError('failed to logout!')
        }
    }

    return (
        <div>
            {error && <p>{error}</p>}
            email : {currentUser.email}
            <Button variant='Link' onclick={handleLogout}>Logout</Button>
        </div>
    )
}

export default Dashboard
