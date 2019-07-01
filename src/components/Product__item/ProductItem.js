import React from 'react'

import { Img, Div, DivInfo, P } from './ProductItem__style'
import Button from '../UI/Button'

const ProductItem = ({product, onAddedToCart}) => {
    const { title,price, img } = product

    return (
        <Div>
            <Img src={img} alt="pic"/>
            <DivInfo>
                <P> { title } </P>
                <span>$ { price } </span>
                <Button primary
                    onClick={onAddedToCart}
                >
                    Add to cart
                </Button>
            </DivInfo>
        </Div>
    )
}

export default ProductItem
