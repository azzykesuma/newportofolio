import React,{ useRef,useState} from 'react'
import {
    FormControl,
    FormLabel,
    Row,
    Button,
    ForgetPass,
    SignUp,
    H2,
    Click
} from './FormStyle';
import {
    HeaderContainer,
    Logo,
    Title
} from '../header/headerStyle'
import img from '../../assets/logo.svg'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import '../Form/formStyle.css'
import IconContainer from '../IconContainer'



const FormContainer = () => {
    const emailRef = useRef();
    const passwordref = useRef();
    const { Login } = useAuth();
    const [error,setError] = useState();
    const [loading,setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await Login(emailRef.current.value,passwordref.current.value)
            history.push('/')
        } catch {
            setError('Failed to login')
        }
        setLoading(false)
    }

    return (
        <>
        <HeaderContainer>
            <Logo src={img}/>
                <Title> 
                    My Portofolio
                </Title>
        </HeaderContainer>
        <H2>Login</H2>
        {error && <p>{error}</p>}
        <FormControl>
            <form onSubmit={handleSubmit}>
                <Row>
                    <FormLabel>Email</FormLabel>
                    <input className='input' type='email' ref={emailRef} />
                </Row>

                <Row>
                    <FormLabel>Password</FormLabel>
                    <input className='input' type='password' ref={passwordref} />
                </Row>
                <Button type='submit' disabled={loading}>Login</Button>
                <ForgetPass>Forget Password ? click <Click to='forgot-password'>here</Click></ForgetPass>
                <SignUp>Need an Account ? click <Click to='sign-up'>here</Click></SignUp>
            </form>
        </FormControl>
        <IconContainer />

    </>
    )
}

export default FormContainer
