import { createContext, useContext, useReducer } from "react";

const ReducerContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_WISHLIST':{
            return {...state, wishlist: Array.from(new Set([...state.wishlist, action.payload.newProduct]))}
        }
        case 'REMOVE_DUPLICATE_WISHLIST':{
            return {...state, wishlist: action.payload.uniqueList}
        }
        case 'REMOVE_FROM_WISHLIST': {
            return {...state, wishlist: action.payload.itemRemovedWishlist}
        }
        case 'PRICE_HIGH_TO_LOW': {
            return {...state, productlist: action.payload.sortedProductList}
        }
        case 'PRICE_LOW_TO_HIGH': {
            return {...state, productlist: action.payload.sortedProductList}
        }
        case 'INITAL_PRODUCTLIST': {
            return {...state, productlist: action.payload.initialList}
        }
        default:
            break;
    }
    return state
}

const initialState = {
    wishlist: [],
    productlist: []
}

export const ReducerProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <ReducerContext.Provider value={{state, dispatch}}>
            {children}
        </ReducerContext.Provider>
        )
}

export const useReducerContext = () => {
    return useContext(ReducerContext)
}