import { ADD_TO_CART, DELETE_PRODUCT, REMOVE_FROM_CART } from "../../constant"
import { ProductType } from "../../types"

export const addToCart = (product: ProductType): AddToCartType => {
return {
    type: ADD_TO_CART,
    payload: product
}
}
export const removeFromCart = (productId: string): RemoveFromCartType=> {

return {
    type: REMOVE_FROM_CART, 
    payload: productId  
}
}

export const deleteProduct = (productId: string): DeleteProductType=> {

    return {
        type: DELETE_PRODUCT, 
        payload: productId  
    }
    }


type AddToCartType = {
    type: typeof ADD_TO_CART,
    payload: ProductType
}
type RemoveFromCartType = {
    type: typeof REMOVE_FROM_CART, 
    payload: string

}

type DeleteProductType = {
    type: typeof DELETE_PRODUCT, 
    payload: string

}

export type ActionType = AddToCartType | RemoveFromCartType | DeleteProductType