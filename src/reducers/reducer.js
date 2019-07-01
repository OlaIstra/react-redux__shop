import { updateProductList } from "./productList";
import { updateShoppingCart } from "./shoppingCart";


const reducer = (state, action) => {
    console.log(action.type)

    switch (action.type) {
        case 'FETCH__PRODUCTS__REQUEST':
        case 'FETCH__PRODUCTS__SUCCEEDED':
        case 'FETCH__PRODUCTS__FAILED':

            return {
                ...state,
                productList:updateProductList(state, action)
            }

        case 'PRODUCTS__ADDED__TO__CART':
        case 'PRODUCT__DELETE':
        case 'PRODUCT__INCREASE':
        case 'PRODUCT__DECREASE':
            return {
                ...state,
                shoppingCart: updateShoppingCart(state, action)
            }

        default:
            return {
                productList: updateProductList(state, action),
                shoppingCart: updateShoppingCart(state, action)
            }
    }
}

export default reducer
