import React,{ useState } from 'react'
import {
    Label,
    Input,
    Button,
    FormContainer
} from './FooterStyle'

const FormElement = () => {
    const [email,setEmail] = useState('')

    const handleChange = e => {
        setEmail(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()
        alert(`${email} has subscribed!`)
    }

    return (
        <FormContainer>
            <Label>E-mail</Label>
            <Input type='email'value={email} onChange={handleChange} />
            <Button type='submit' onSubmit={onSubmit}>Subscribe</Button>
        </FormContainer>
    )
}

export default FormElement
