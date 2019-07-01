const updateCartItems = (cartItems, item, idx) => {
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1),
    ]
}

const updateCartItem = (product, item = {}) => {
    const {
        id = product.id,
        title = product.title,
        count = 0,
        total = 0,
    } = item

    return {
        id,
        title,
        count: count + 1,
        total: total + product.price,
    };
}

const manageItem = (payload, products, cartItems, num) => {

    const productId = payload
    const product = products.find((product) => product.id === productId)

    const itemIdx = cartItems.findIndex(({ id }) => id === productId)
    const item = cartItems.find((product) => product.id === productId)

    const newProduct = {
        id: item.id,
        title: item.title,
        count: item.count + num,
        total: item.total + num*product.price,
    }

    if(newProduct.count === 0) {
        return [
            ...cartItems.slice(0, itemIdx),
            ...cartItems.slice(itemIdx + 1)
        ]
    }

    return [
        ...cartItems.slice(0, itemIdx),
        newProduct,
        ...cartItems.slice(itemIdx + 1)
    ]
}


export const updateShoppingCart = (state, action) => {

    if(state === undefined) {
        return {
            cartItems:[],
            orderTotal: 0
        }
    }

    const { productList, shoppingCart} = state

    switch(action.type) {

        case 'PRODUCTS__ADDED__TO__CART':
            const productId = action.payload
            const product = productList.products.find((product) => product.id === productId)

            const itemIdx = shoppingCart.cartItems.findIndex(({ id }) => id === productId)
            const item = shoppingCart.cartItems[itemIdx]

            const newProduct = updateCartItem(product, item)
            return {

                cartItems:updateCartItems(shoppingCart.cartItems, newProduct, itemIdx)
            }

        case 'PRODUCT__DELETE':
            const productIdToDel = action.payload
            const itemIdxToDel = shoppingCart.cartItems.findIndex(({ id }) => id === productIdToDel)

            return {
                cartItems:[
                    ...shoppingCart.cartItems.slice(0, itemIdxToDel),
                    ...shoppingCart.cartItems.slice(itemIdxToDel + 1)
                ]
            }

        case 'PRODUCT__INCREASE':
            return {
                cartItems: manageItem(action.payload, productList.products, shoppingCart.cartItems, 1)
            }

        case 'PRODUCT__DECREASE':
            return {
                cartItems: manageItem(action.payload, productList.products, shoppingCart.cartItems, -1)
            }

        default:
            return shoppingCart
    }
}
