import styled from 'styled-components'
import {
    FaFacebookSquare,
    FaTwitter,
    FaGoogle,
    FaGithub
} from 'react-icons/fa'

export const BcgContainer = styled.div`
    width : 100%;
    height : 100%;
    display : grid;
    grid-template-columns : 1fr 1fr ;
`

export const Background = styled.img`
    width : 100%;
    height : 100%;
    background-size : contain;
    position : relative;
    right : 10px;
    z-index : -999;

    @media screen and (max-width : 800px) {
    width : 0;
    height : 0;
    }
`

export const Header = styled.h1`
    font-family : 'Lato', sans-serif;
`

export const MainContainer = styled.div`
    width : 30vw;
    height : 60vh;
    background-color : #6654F1;
    position : relative;
    margin-top : 10rem;
    margin-left : 2rem;
    padding : 10px 15px;
    text-align : center;
    border-radius : 5px;
    box-shadow: 3px 6px 8px 1px rgba(2,2,11,0.76);

    @media screen and (max-width : 800px) {
        margin-top : 3rem;
        width : 120%;
        text-align : center;
        justify-content : center;
        align-items : center;
        position : relative;
        right : 70%;
    }
`

export const FooterContainer = styled.div`
    padding : 10px 5px;
    margin : 10px 3px;
`

export const Twitter = styled(FaTwitter)`
    color : white;
    cursor : pointer;
    width : 30px;
    height : 30px;
    padding-right : 5px;
`

export const FaFacebook = styled(FaFacebookSquare)`
    color : white;
    cursor : pointer;
    width : 30px;
    height : 30px;
    padding-right : 5px;
`

export const Gmail = styled(FaGoogle)`
    color : white;
    cursor : pointer;
    width : 30px;
    height : 30px;
    padding-right : 5px;
`

export const Github = styled(FaGithub)`
    color : white;
    cursor : pointer;
    width : 30px;
    height : 30px;
    padding-right : 5px;
`
