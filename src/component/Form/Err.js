import React from 'react'
import { Error } from './FormStyle'

const Err = (props) => {
    return (
        <div>
            <Error>{props.children}</Error>
        </div>
    )
}

export default Err
