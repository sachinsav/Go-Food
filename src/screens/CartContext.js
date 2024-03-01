import { useContext, useReducer, createContext } from "react";

const CartContext = createContext();
const dispatchContext = createContext();
function reducer(state, action){
    switch(action.type){
        case 'ADD':
            return ([...state, {id:action.id, categoryName: action.categoryName, name:action.name, img:action.img, description: action.description, option:action.option, price:action.price}])
        default:
            return state
    }

}


export const CartProvider = function({ children }){
    const [cartData, dispatch] = useReducer(reducer, []);
    
    

    return (
    <CartContext.Provider value={cartData}>
        <dispatchContext.Provider value={dispatch}>
            { children }
        </dispatchContext.Provider>
    </CartContext.Provider>
    )
    

}
export const useCartContext = ()=>useContext(CartContext);
export const useDispatchContext = ()=>useContext(dispatchContext);
