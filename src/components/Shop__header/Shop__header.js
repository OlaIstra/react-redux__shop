import React from 'react'

import {connect} from 'react-redux'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { Div, DivCart, SpanNum } from './Shop__header__style'

const ShopHeader = ({ items,total }) => {

    const linkStyle = {
        color: 'black',
        fontFamily: 'Pacifico',
    }

    return (
        <Div>
            <Link to='/' style={linkStyle}>BookApp</Link>
            <DivCart>
                <Link to='/cart'>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
                <SpanNum>
                    {items.length} items
                </SpanNum>
                <span>
                    ${total}
                </span>
            </DivCart>
        </Div>
    )
}

const mapStateToProps = ({shoppingCart: { cartItems }}) => {
    return {
        items: cartItems,
        total: cartItems.reduce((acc, item) => {
            return acc+=item.total
        }, 0)
    }
}

export default connect(mapStateToProps)(ShopHeader)
