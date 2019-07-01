import { products__loaded, products__loaded__success, products__loaded__error, products__added, product__delete, product__inc, product__dec } from "./action__types";

export const fetchStart = () => {
    return {
        type: products__loaded
    }
}

export const fetchSuccess = (newProducts) => {
    return {
        type: products__loaded__success,
        payload: newProducts
    }
}

export const fetchFailure = () => {
    return {
        type: products__loaded__error
    }
}

export const productAddedToCart = (productId) => {
    return {
        type: products__added,
        payload: productId
    }
}

export const productDelete = (productId) => {
    return {
        type: product__delete,
        payload: productId
    }
}

export const productInc = (productId) => {
    return {
        type: product__inc,
        payload: productId
    }
}

export const productDec = (productId) => {
    return {
        type: product__dec,
        payload: productId
    }
}



