import styled from 'styled-components'

export const CardContainer = styled.div`
    background-color : #D75B1E;
    border-radius : 16px;
    width : 300px;
    height : auto;
    display : grid;
    justify-items : center;
    box-shadow: 10px 5px 15px 5px rgba(24,30,38,0.72);
    transition : 0.3s ease-in-out;
    color : #fff;
    margin-bottom : 2em;

    &:hover {
        transform : translateY(-10px);
        background-color : #594322;
        cursor : pointer;
    }
`
export const Description = styled.p`
    color : #fff;
    margin-top : 10px;
    margin-left : 10px;
    font-family : 'Lato',sans-serif;
    font-size : 14px;
`
export const Imgproject = styled.img`
    width : 90%;
    margin-top : 15px;
    height : 10rem; 
    border-radius : 10px;
`
export const TechInfo = styled.p`
    color : #fff;
    margin-top : 10px;
    position : relative;
    left : -110px;
`

export const TechStack = styled.ul`
    padding-left : 3px;
    margin-top : 5px;
`
export const TechList = styled.li`
    list-style : square;
    margin-top : 5px;
    position : relative;
    left : -80px;
    color : #fff;
    margin-bottom : 10px;
`
export const Rate = styled.p`
    color : #fff;
    font-size : 1.3em;
    margin-bottom : 10px;
`