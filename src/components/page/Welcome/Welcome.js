import React from 'react'

import { Div, H1 } from './Welcome__style'
import { Link } from 'react-router-dom'

import Button from '../../UI/Button'

const Welcome = () => {
    return (
        <Div>
            <H1>Welcome to BookApp</H1>
            <Link to='/home' >
                <Button primary>
                    Let's start shopping
                </Button>
            </Link>
        </Div>
    )
}

export default Welcome
