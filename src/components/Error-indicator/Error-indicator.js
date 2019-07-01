import React from 'react'

import icon from './broken-robot.jpg'

const stylesSpan ={
    padding: 10 + '%',
    fontSize: 30 + 'px',
    fontFamily: "Arial",
    fontWeight: 'bold'
}

const ErrorIndicator = () => {
    return (
        <div style={{display: 'flex'}}>
            <img src={icon} alt="error"/>
            <span style={stylesSpan}>Sorry! Something has gone terribly wrong. Please reload App</span>
        </div>
    )
}

export default ErrorIndicator
