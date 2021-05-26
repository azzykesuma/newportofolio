import React,{useState} from 'react'
import {
    Header,
    Nav,
    Title,
    Icon,
    Logo,
} from '../dashboard/DashboardStyle'
import {
    ProfileContainer,
    Image,
    Email,
    Name,
    Container,
    Button,
    DataContainer,
    OngoingQuest,
    CompletedQuest,
    LabelOngoing,
    LabelComplete,
    QuestBtn,
    LabelXp,
    LabelRank,
    TotalXp,
    Rank
} from './ProfileStyle'
import { useAuth } from '../../context/AuthContext'
import Sidebar from '../../component/Sidebar/Sidebar'
import gambar  from '../../assets/logofix.png'

const Profile = () => {
    const {currentUser} = useAuth()
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
                    <Title to='/'>Home</Title>
                    <Title to='contact'>Contact Me</Title>
                    <Icon onClick={toggle}/>
               </Nav>
        </Header>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Container>
        <ProfileContainer>
            <Image />
            <Email>Email : {currentUser.Email}</Email>
            <Name>myName</Name>
            <Button>Update Profile</Button>
        </ProfileContainer>
        <DataContainer>
            <LabelOngoing>Ongoing Quest</LabelOngoing>
            <OngoingQuest>PHP to Javascript refactoring</OngoingQuest>
            <LabelComplete>Completed Quest</LabelComplete>
            <CompletedQuest>
                <QuestBtn>PHP refactor</QuestBtn>
                <QuestBtn>Maria DB instalation</QuestBtn>
                <QuestBtn>Nasa HTML Hack</QuestBtn>
                <QuestBtn>+3 more</QuestBtn>
            </CompletedQuest>

            <LabelXp>Total Xp</LabelXp>
            <TotalXp>100xp</TotalXp>

            <LabelRank>Rank</LabelRank>
            <Rank>Vanguard of CSS</Rank>
        </DataContainer> 
        </Container>
        
        </>
    )
}

export default Profile