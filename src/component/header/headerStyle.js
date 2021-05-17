import styled from 'styled-components'


export const HeaderContainer = styled.div`
    margin : 8px 15px;
    padding : 5px 7px;
    display : grid;
    grid-template-columns : 1fr 1fr;
    justify-content : center;
    align-items : center;
`

export const Logo = styled.img`
    width : 50px;
    height : 50px;
`
export const Title = styled.h3`
    font-size : 16px;
    color : #88D8DD;
    text-align : center;
    position : relative;
    right : 35%;
    font-family: 'Lato', sans-serif;
`