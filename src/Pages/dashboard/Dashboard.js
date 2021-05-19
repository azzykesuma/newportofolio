import React,{ useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import {  useHistory } from 'react-router-dom'
import { Button } from '../PagesStyle'
import {
    Header,
    Nav,
    Title,
    NavIcon,
    Icon,
    Logo,
    MainProject,
    HeroTitle,
    CardContainer
} from './DashboardStyle'
import Sidebar from '../../component/Sidebar/Sidebar'
import gambar  from '../../assets/logofix.png'
import CardProject from '../../component/Card/CardProject'

const Dashboard = () => {
    const {currentUser, logout} = useAuth();
    const [error,setError] = useState('')
    const history = useHistory()

    async function handleLogout(){
        setError('')

        try {
            await logout()
            history.pushState('/Login')
            console.log('user logged out');    
        }
        catch {
            setError('failed to logout!')
        }
    }

    const [isOpen,setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
           <Header>
               <Logo src={gambar}/>
               <Nav>
                   <Title>Profile</Title>
                   <Title>Home</Title>
                   <Title>Contact Me</Title>
                    <Icon onClick={toggle}/>
               </Nav>
            </Header>
            <Sidebar isOpen={isOpen} toggle={toggle}/> 
            <MainProject>
                <HeroTitle>My Projects</HeroTitle>
                <CardContainer>
                    <CardProject />
                    <CardProject />
                    <CardProject />
                </CardContainer>
            </MainProject>
        </>
    )
}

export default Dashboard
