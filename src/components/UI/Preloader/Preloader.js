import React from 'react'

import './Preloader.css'

const stylePreloader = {width:100+'px',height:100+'px'}

const Preloader = () => {
    return (
        <div className="lds-css ng-scope">
            <div className="lds-spinner" style={stylePreloader}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Preloader



