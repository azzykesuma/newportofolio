import styled from 'styled-components'

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