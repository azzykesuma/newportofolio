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
import Gold from '../../assets/gold.svg'

const ServiceCard1 = () => {
    return (
        <CardContainer>
            <Icon src={Gold}/>
            <RateTitle>Gold Package</RateTitle>
            <WorkCoverage>Full Frontend Services</WorkCoverage>
            <RateCoverage>The Services Include</RateCoverage>
            <Services>
                <List>Source Code</List>
                <List>Responsive</List>
                <List>SEO</List>
                <List><strike>Backend Services</strike></List>
                <List><strike>Support Services</strike></List>
            </Services>
            <Price>$40 / Hour</Price>
        </CardContainer>
    )
}

export default ServiceCard1
