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
import bronze from '../../assets/silver.svg'

const ServiceCard1 = () => {
    return (
        <CardContainer>
            <Icon src={bronze}/>
            <RateTitle>Bronze Package</RateTitle>
            <WorkCoverage>Full Frontend Services</WorkCoverage>
            <RateCoverage>The Services Include</RateCoverage>
            <Services>
                <List>Source Code</List>
                <List>Responsive</List>
                <List><strike>SEO</strike></List>
                <List><strike>Backend Services</strike></List>
                <List><strike>Support Services</strike></List>
            </Services>
            <Price>$30 / Hour</Price>
        </CardContainer>
    )
}

export default ServiceCard1
