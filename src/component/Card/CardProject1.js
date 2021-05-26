import React from 'react'
import {
    CardContainer,
    Imgproject,
    Description,
    TechInfo,
    TechStack,
    TechList,
    Rate
} from './CardStyle'
import kodingan from '../../assets/kodingan.jpg'



const CardProject = () => {
    return (
        <CardContainer>
            <Imgproject src={kodingan}/>
                <Description>'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'</Description>
                <TechInfo>TechStack</TechInfo>
                <TechStack>
                    <TechList>HTML</TechList>
                    <TechList>CSS</TechList>
                    <TechList>JAVASCRIPT</TechList>
                </TechStack>
                <Rate>Difficulty : Medium</Rate>
        </CardContainer>
    )
}

export default CardProject
