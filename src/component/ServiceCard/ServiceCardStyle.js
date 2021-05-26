import styled from 'styled-components'

export const ServiceContainer = styled.div`
    display : grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    align-items: center;
    justify-content: center;
    justify-items : center;

`
export const ServiceTitle = styled.h1`
    color : #fff;
    font-weight : 400px;
    font-family: 'Lato',sans-serif;
    text-align: center;
`
export const CardContainer = styled.div`
    margin-top : 30px;
    background-color : #F11010;
    border-radius : 16px;
    width : 150px;
    height : auto;
    display : grid;
    justify-items : center;
    box-shadow: 10px 5px 15px 5px rgba(24,30,38,0.72);
    transition : 0.3s ease-in-out;
    color : #fff;
    margin-bottom : 2em;

    &:hover {
        transform : translateY(-10px);
        background-color :#3F0B0B;
        cursor : pointer;
    }

`
export const Icon = styled.img`
    width : 40px;
    margin-top : 10px;
`
export const RateTitle = styled.h2`
    font-family: 'Lato';
    font-size : 1.3em;
    padding : 20px;
    text-align: center;
`
export const WorkCoverage = styled.h2`
    font-family: sans-serif;
    font-size : 1em;
    margin-bottom : 3px;
    padding-top : 10px;
    text-align: center;
    padding : 10px;
`
export const RateCoverage = styled.h3`
    font-family: 'Lato';
    font-size : 0.8em;
    font-weight : 300px;
`
export const Services = styled.ul`
    list-style : none;
    padding-top : 10px;
    padding-bottom: 10px;
`
export const List = styled.li`
    font-family: 'Lato';
    font-size : 1em;
    text-align: center;
`
export const Price = styled.h1`
    font-size : 1.3em;
    font-weight : 400px;
    color : #fff;
    padding : 5px;
    background-color: blueviolet;
    border-radius: 5px;
    margin-bottom : 10px;
`