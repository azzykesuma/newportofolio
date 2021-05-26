import styled from 'styled-components'

export const Container = styled.div`
    margin : 0;
    padding : 0;
    display : grid;
    justify-items : center;
`

export const ProfileContainer = styled.div`
    display : grid;
    grid-template-columns: auto;
    justify-items : center;
    margin-top : 10vh;
    border : 1px solid green;
    width : 30%;
    padding : 20px 30px;
    border-radius : 5px;

    @media screen and (max-width : 480px) {
        width : 40%;
    }
`
export const Image = styled.div`
    width : 100px;
    height : 100px;
    border-radius: 50%;
    background-color: blue;
    opacity : 0.7;
`
export const Email = styled.h3`
    font-family : 'Lato';
    margin-top : 10px;
    font-size : 1em;
`
export const Name = styled.h3`
    font-family : 'Lato';
    font-size : 1em;
`
export const Button = styled.button`
    box-shadow: 0px 10px 14px -7px #5bc8d9;
	background:linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
	background-color:#599bb3;
	border-radius:8px;
    border : none;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:8px 20px;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
    margin-top : 10px;

    &:hover {
        background:linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
        background-color:#408c99;
    }
    &:active {
        position:relative;
	    top:1px;
    }
`   
export const DataContainer = styled.div`
    display : grid;
    grid-template-columns: auto;
    justify-items : center;
    margin-top : 10vh;
    border : 1px solid green;
    background-color : #5E9567;
    box-shadow: 4px 5px 5px -2px rgba(0,0,0,0.62);
    width : 30%;
    padding : 20px 30px;
    border-radius : 5px;

    @media screen and (max-width : 480px) {
        width : 60%;
    }
`
export const OngoingQuest = styled.h3`
    padding : 5px 6px;
    border-radius : 5px;
    background-color : #2089E5;
    margin-bottom : 10px;
    font-family: 'Lato';
    font-size : 1em;
    color : #1C355E;
`
export const LabelComplete = styled.h3`
    font-size : 1em;
    color : #fff;
    margin-bottom : 10px;
`
export const CompletedQuest = styled.div`
    display : grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom : 10px;
`
export const QuestBtn = styled.button`
    box-shadow:inset 0px 0px 15px 3px #23395e;
	background:linear-gradient(to bottom, #31b5a3 5%, #5f71c7 100%);
	background-color:#31b5a3;
	border-radius:15px;
	border:1px solid #1f2f47;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:10px;
	padding:3px 3px;
	text-decoration:none;
	text-shadow:0px 1px 0px #263666;
    margin-right : 5px;

    &:hover {
        background:linear-gradient(to bottom, #5f71c7 5%, #31b5a3 100%);
	    background-color:#5f71c7;
    }
`
export const TotalXp = styled.h3`
    font-size : 1em;
    color : #fff;
    margin-bottom : 10px;
`
export const Rank = styled.h3`
    font-size : 1em;
    color : #fff;
`
export const LabelOngoing = styled.h3`
    font-size : 1em;
    color : #fff;
    margin-bottom : 10px;
`
export const LabelXp = styled.h3`
    font-size : 1em;
    color : #fff;
`
export const LabelRank = styled.h3`
    font-size : 1em;
    color : #fff;
`
