import React,{ useRef,useState} from 'react'
import {
    FormControl,
    FormLabel,
    Row,
    Button,
    Login,
    H2,
    Click
} from '../component/Form/FormStyle';
import {
    HeaderContainer,
    Logo,
    Title
} from '../component/header/headerStyle'
import img from '../assets/logo.svg'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import '../component/Form/formStyle.css'





const FormContainer = () => {
    const emailRef = useRef();
    const passwordref = useRef();
    const Cpasswordref = useRef();
    const { signUp } = useAuth();
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordref.current.value !== Cpasswordref.current.value) {
            return setError('password do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signUp(emailRef.current.value,passwordref.current.value)
            setLoading(false)
            history.push('/')
        } catch {
            setError('failed to login')
        }
        
    }

    return (
        <>
        <HeaderContainer>
            <Logo src={img}/>
                <Title> 
                    My Portofolio
                </Title>
        </HeaderContainer>
        <H2>Create New Account</H2>
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

                <Row>
                    <FormLabel>Confirm Password</FormLabel>
                    <input className='input' type='password' ref={Cpasswordref} />
                </Row>
                <Button type='submit' disabled={loading}>Sign Up</Button>
                <Login>Already have an account ? Login <Click to='login'>here</Click> </Login>
            </form>
        </FormControl>
    </>
    )
}

export default FormContainer
