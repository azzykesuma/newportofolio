import React from 'react'
import {
    FooterContainer,
    FooterTitle,
    ListContainer,
    Subscribe,
    CopyRightContainer
} from './FooterStyle'
import ListGroup1 from './ListGroup1'
import ListGroup2 from './ListGroup2'
import ListGroup3 from './ListGroup3'
import FormElement from './FormElement'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterTitle>Footer</FooterTitle>
            <ListContainer>
                <ListGroup1 />
                <ListGroup2 />
                <ListGroup3 />
            </ListContainer>
            <Subscribe>Subscribe to my Mailing List</Subscribe>
            <FormElement />
            <CopyRightContainer>
                copyright @ azzy 2021
            </CopyRightContainer>
        </FooterContainer>
    )
}

export default Footer
