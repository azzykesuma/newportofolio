import React from 'react'
import {
    CardContainer,
    Icon,
    RateTitle,
    WorkCoverage,
    RateCoverage,
    Services,
    List,
    Price
} from './ServiceCardStyle'
import Diamond from '../../assets/diamond.svg'

const ServiceCard1 = () => {
    return (
        <CardContainer>
            <Icon src={Diamond}/>
            <RateTitle>Gold Package</RateTitle>
            <WorkCoverage>Full Frontend Services</WorkCoverage>
            <RateCoverage>The Services Include</RateCoverage>
            <Services>
                <List>Source Code</List>
                <List>Responsive</List>
                <List>SEO</List>
                <List>Backend Services</List>
                <List>Support Services</List>
            </Services>
            <Price>$50 / Hour</Price>
        </CardContainer>
    )
}

export default ServiceCard1
