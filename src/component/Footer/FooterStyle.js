import styled from 'styled-components'


export const FooterContainer = styled.div`
    width : 100%;
    height : auto;
    background-color : #000;
    position : relative;
    bottom : -105%;
    
    @media screen and (max-width : 1000px) {
        bottom : -105%;
    }
`
export const FooterTitle = styled.h1`
    font-family: 'Lato';
    font-size : 1em;
    color : #fff;
    text-align: center;
    margin-bottom : 10px;

`
export const ListContainer = styled.div`
    display : grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    justify-items : center;
`
export const Subscribe = styled.h2`
    font-family: 'Lato';
    font-size : 0.8em;
    color : #fff;
    font-weight: 300px;
    text-align : center;
    margin-top : 10px;
    margin-bottom : 10px;
`
export const CopyRightContainer = styled.div`
    margin-top : 20px;
    color : white;
    justify-content: center;
    text-align: center;
`
export const List = styled.ul`
    list-style: none;
    color : #fff;
`
export const ListItem = styled.li`
    cursor : pointer;
    font-family: 'Lato';

    &:hover {
        color : yellow
    }
`
export const FormContainer = styled.div`
    display : grid;
    justify-content: center;
    grid-template-columns: auto auto auto;
`
export const Label = styled.label`
    display : inline;
    color : white;
    font-size : 1.5em;
    align-items: center;
    position : relative;
    top : 5px;
    margin-right : 10px;
`
export const Input = styled.input`
    border-radius : 5px;
    padding : 8px 10px;
`
export const Button = styled.button`
    padding : 5px 8px;
    background-color : lightblue;
    border-radius : 8px;
    margin-left : 5px;
    font-size : 20px;
    transition: 0.5s ease-in-out;

    &:hover {
        background-color: violet;
    }
`