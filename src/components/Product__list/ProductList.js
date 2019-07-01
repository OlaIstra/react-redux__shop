import React, { Component } from 'react'

import ProductItem from '../Product__item/ProductItem'

import { bindActionCreators } from "redux";

import { connect } from 'react-redux'
import withProductService from '../hoc/with-product-service'
import { productAddedToCart } from "../../actions/action";
import compose from '../../utils/compose'
import { fetchProducts } from '../../services/product-service'

import ErrorIndicator from '../../components/Error-indicator/Error-indicator'
import Preloader from '../../components/UI/Preloader/Preloader'

import { Li, Ul } from './ProductList__style'

const ProductList = ({products, onAddedToCart}) => {
    return (
        <Ul>
            {
                products.map((product) => {
                    return (
                        <Li key={ product.id }>
                            <ProductItem
                                product={product}
                                onAddedToCart={() => onAddedToCart(product.id)}
                            />
                        </Li>
                    )
                })
            }
        </Ul>
    )
}

class ProductListContainer  extends Component {

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        const { products = [],onAddedToCart, isError, isLoading } = this.props

        return (
            <Ul>
                {
                    (isLoading)
                        ? <Preloader />
                        : null
                }
                {
                    (isError)
                        ? <ErrorIndicator />
                        : null
                }
                <ProductList products={products} onAddedToCart={onAddedToCart}/>
            </Ul>
        )
    }
}

const mapStateToProps = (state) => {
    const {productList:{products}, productList: {isLoading}, productList:{isError}} = state
    return { products, isLoading, isError}
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchProducts: () => dispatch(fetchProducts()),
        onAddedToCart: (id) => dispatch(productAddedToCart(id))
    }
}

export default compose(
    withProductService(),
    connect(mapStateToProps, mapDispatchToProps))(ProductListContainer)
