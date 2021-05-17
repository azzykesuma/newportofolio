import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Field } from 'formik'

export const FormControl = styled.div`
    margin : auto 10px;
`
export const Row = styled.div`
    margin-bottom : 7px;
    
    @media center and (max-width : 640px) {
        display : inline-block;
    }
`

export const FormLabel = styled.label`
    font-family : 'Lato',sans-serif;
    color : white;
    display : block;
    margin-bottom : 10px;
    display : grid;
    text-align : left;
`
export const Error = styled.p`
    color : red;
`


export const Button = styled.button`
    padding : 6px 7px;
    font-family : 'Lato',sans-serif;
    font-size : 1rem;
    border-radius : 5px;
    text-align : left;
    display : grid;
    text-align : left;
    margin-top : 8px;
    background-color : #12385A;
    color : #fff;
    border : none;
    cursor : pointer;
    transition : 0.5s;

    &:hover {
        background-color : #A0D12D;
    }
`

export const ForgetPass = styled.p`
    font-family : 'Lato',sans-serif;
    font-size : 0.8rem;
    color : white;
    text-align : left;
    margin-top : 10px;
`

export const SignUp = styled.p`
    font-family : 'Lato',sans-serif;
    font-size : 0.8rem;
    color : white;
    text-align : left;
    margin-top : 5px;
`

export const Login = styled.p`
    font-family : 'Lato',sans-serif;
    font-size : 0.8rem;
    color : white;
    text-align : left;
    margin-top : 5px;
`
export const H2 = styled.h2`
    color : #fff
`

export const Click= styled(Link)`
    text-decoration : none;
    color : #fff;
`