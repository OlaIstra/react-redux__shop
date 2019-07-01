import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    margin: 0 10px;
`

const ButtonIcon = (props) => {
    return (
        <Button className={props.btn} onClick={props.onClick}>
            <i className={props.fontAwesomeClass} />
        </Button>
    )
}

export default ButtonIcon
