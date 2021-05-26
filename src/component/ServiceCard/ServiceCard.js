import React from 'react'
import {
    ServiceContainer,
    ServiceTitle
} from './ServiceCardStyle'
import ServiceCard1 from './ServiceCard1'
import ServiceCard2 from './ServiceCard2'
import ServiceCard3 from './ServiceCard3'

const ServiceCard = () => {
    return (
        <>
        <ServiceTitle>My Rate of Services</ServiceTitle>
        <ServiceContainer>
            <ServiceCard1 />
            <ServiceCard2 />
            <ServiceCard3 />
        </ServiceContainer>
        </>
    )
}

export default ServiceCard
