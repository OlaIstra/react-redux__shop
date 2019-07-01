export const updateProductList = (state,action) => {
    if(state === undefined) {
        return {
            products: []
        }
    }

    switch (action.type) {

        case 'FETCH__PRODUCTS__REQUEST':
            return {
                isLoading: true
            }

        case 'FETCH__PRODUCTS__SUCCEEDED':
            return {
                isLoading: false,
                products: action.payload,
            }

        case 'FETCH__PRODUCTS__FAILED':
            return {
                isLoading: false,
                isError: true
            }
        default:
            return state.productList
    }
}
