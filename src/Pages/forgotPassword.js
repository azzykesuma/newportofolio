import React,{ useRef,useState} from 'react'
import {
    FormControl,
    FormLabel,
    Row,
    Button,
    Login,
    Click,
    H2
} from '../component/Form/FormStyle';
import {
    HeaderContainer,
    Logo,
    Title
} from '../component/header/headerStyle'
import img from '../assets/logo.svg'
import { useAuth } from '../context/AuthContext'
import '../component/Form/formStyle.css'


const FormContainer = () => {
    const emailRef = useRef();
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const { resetPassword } = useAuth()
    const [message,setMessage] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setMessage('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your email for password confirmation')
        } catch {
            setError('Failed to reset password')
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
        <H2>Reset Password</H2>
        {error && <p>{error}</p>}
        {message && <p>{message}</p>}
        <FormControl>
           <form onSubmit={handleSubmit}>
               <Row>
                   <FormLabel>Email</FormLabel>
                   <input type='email' className='input' ref={emailRef} />
               </Row>
               <Button type='submit' disabled={loading}>Reset Password</Button>
           </form>
                <Login>Back to Login Page <Click to='login'>here</Click></Login>
        </FormControl>
    </>
    )
}

export default FormContainer
