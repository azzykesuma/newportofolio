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
import project3 from '../../assets/project3.jpg'



const CardProject = () => {
    return (
        <CardContainer>
            <Imgproject src={project3}/>
                <Description>'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'</Description>
                <TechInfo>TechStack</TechInfo>
                <TechStack>
                    <TechList>1</TechList>
                    <TechList>2</TechList>
                    <TechList>3</TechList>
                </TechStack>
                <Rate>Difficulty : Medium</Rate>
        </CardContainer>
    )
}

export default CardProject
