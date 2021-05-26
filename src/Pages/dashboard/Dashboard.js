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
    CardContainer,
    // ServiceMain
} from './DashboardStyle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from '../../component/Sidebar/Sidebar'
import gambar  from '../../assets/logofix.png'
import CardProject1 from '../../component/Card/CardProject1'
import CardProject2 from '../../component/Card/CardProject2'
import CardProject3 from '../../component/Card/CardProject3'
import ServiceCard from '../../component/ServiceCard/ServiceCard'
import profile from '../../Pages/Profile/Profile'
import Footer from '../../component/Footer/Footer'

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
                           <Title to='/profile'>Profile</Title>
                            <Title>Home</Title>
                            <Title to='contact'>Contact Me</Title>
                            <Icon onClick={toggle}/>
               </Nav>
            </Header>
            <Sidebar isOpen={isOpen} toggle={toggle}/> 
            <MainProject>
                <HeroTitle>My Projects</HeroTitle>
                <CardContainer>
                    <CardProject1 />
                    <CardProject2 />
                    <CardProject3 />
                </CardContainer>
                <ServiceCard />
            </MainProject>
            <Footer />
        </>
    )
}

export default Dashboard
