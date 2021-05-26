import styled from 'styled-components'

export const Container = styled.div`
    /* margin : 0;
    padding : 0; */
    display : grid;
    justify-items : center;
    align-content: center;    
`
export const ContactContainer = styled.div`
    border : 1px solid black;
    border-radius : 5px;
    width : 400px;
    display : grid;
    grid-template-columns: 1fr;
    justify-items : center;
    align-content: center;
    position : relative;
    top : 130px;
`
export const ContactMe = styled.h2`
    font-family : 'Lato';
    font-size : 1em;
    color : black;
`
export const Form = styled.form`
    margin-top : 10px;
`
export const Input = styled.input`
    border-radius : 6px;
    width : ${props => props.check ? '20px' : '80%'};
    height : ${props => props.textarea ? '50px' : 'auto'};
    border : 1px solid black;
    padding : 6px 5px;
    display : ${props => props.check ? 'inline' : 'block'};
    margin-bottom : 10px;
    margin-left : 10px;
`

export const Label = styled.label`
    color : blue;
    display : inline;
    margin-left : 10px;
`
export const Button = styled.button`
    box-shadow: 0px -5px 14px -7px #276873;
	background:linear-gradient(to bottom, #298cb0 5%, #434099 100%);
	background-color:#298cb0;
	border-radius:11px;
	display:inline-block;
	cursor:pointer;
	color:#e0cee0;
	font-family:Arial;
	font-size:14px;
	font-weight:bold;
	padding:8px 10px;
	text-decoration:none;
	text-shadow:0px 1px 0px #215c70;
    display : block;
    margin-bottom : 10px;
    &:hover {
        background:linear-gradient(to bottom, #434099 5%, #298cb0 100%);
	    background-color:#434099;
    }
    &:active {
        position:relative;
	    top:1px;
    }
`