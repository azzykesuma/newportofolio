import React,{ useState } from 'react'
import {
    Header,
    Nav,
    Title,
    Icon,
    Logo,
} from '../dashboard/DashboardStyle'
import {
    ContactMe,
    Container,
    ContactContainer,
    Input,
    Form,
    Label,
    Button,
} from './ContactStyle'
import Sidebar from '../../component/Sidebar/Sidebar'
import gambar  from '../../assets/logofix.png'
import Footer from '../../component/Footer/Footer'


const Contact = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const [state,setState] = React.useState({
        email : '',
        text : '',
        checked : false
    })

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        alert('your question has been submitted!')
    }
    return (
        <>
            <Header>
                <Logo src={gambar}/>
                <Nav>
                        <Title to='/profile'>Profile</Title>
                        <Title to='/'>Home</Title>
                        <Title>Contact Me</Title>
                        <Icon onClick={toggle}/>
                </Nav>
            </Header>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Container>
        <ContactContainer>
            <ContactMe>Contact Me</ContactMe>
            <Form onSubmit={handleSubmit}>
                <Label>E-mail</Label>
                <Input
                type='email'
                name='email'
                value={state.email}
                onChange={handleChange}
                />

                <Label>
                Question
                <Input 
                type='textarea'
                name='text'
                value={state.text}
                placeholder='type your question here'
                onChange={handleChange}
                textarea
                />
                
                </Label>
                

                <Label>
                <Input type='checkbox' 
                name='check'
                value={state.checked}
                onChange={handleChange}
                check
                />
                I Agree to receive email notifications
                </Label>
                <Button type='submit'>Submit</Button>
            </Form>
           
        </ContactContainer> 
        <Footer />
        </Container>
        
          
        </>
    )
}

export default Contact
