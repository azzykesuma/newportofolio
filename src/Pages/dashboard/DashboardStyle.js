import styled from 'styled-components'
import { TiThMenu } from 'react-icons/ti'

export const Header = styled.div`
    background-color : blueviolet;
    width : 100%;
    height : 80px;
    justify-content : right;
    align-content : center;
    display : grid;
    gap: 4px;
    grid-auto-flow: column; 
`
export const Logo = styled.img`
    display : flex;
    width : 60px;
    position : absolute;
    top : 10px;
    float : right;
`

export const Nav = styled.nav`
    padding-right : 10px;
    display : inline-grid;
    grid-template-columns : auto auto auto auto;
    grid-column-gap : 10px;
`

export const Title = styled.li`
    background-color : transparent;
    color : burlywood;
    list-style : none;
    justify-content : center;
    padding : 31px 10px 31px 10px;
    transition : 0.5s;
    cursor : pointer;

    &:hover {
        background-color : whitesmoke;
    }

    @media screen and (max-width : 480px) {
        display : none;
    }
`

export const Icon = styled(TiThMenu)`
    font-size : 2rem;
    justify-content : center;
    align-content : center;
    cursor : pointer;
    color : #fff;
    position : relative;
    top : 30%;
    display : none;

    @media screen and (max-width : 480px) {
        top : 0;
        display : flex;
    }
` 
export const MainProject = styled.div`
    background-color : #1C355E;
    width : 100%;
    height : 100%;
`
export const HeroTitle = styled.h1`
    font-size : 2rem;
    font-family : 'Lato',sans-serif;
    color : #fff; 
    text-align : center;
    padding-top : 30px;
    padding-bottom : 30px;
`
export const CardContainer = styled.div`
    display : grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    justify-items : center;
    grid-gap : 8rem;
`