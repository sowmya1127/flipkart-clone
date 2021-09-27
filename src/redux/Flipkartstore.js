
import { createStore } from 'redux';

let intialstate = {
    basket: [],
    wish: [],
    user: null
}

function reducer(state = intialstate, action) {
    switch (action.type) {
        case 'ADD_TO_CART':

            return { ...state, basket: [...state.basket, action.item] }
        case 'REMOVE_FROM_CART':
            let newBasket = [...state.basket]
            let index = newBasket.findIndex(item => item.id === action.id);
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn(`cant remove product if ${action.id} as it is not in the basket`);
            }
            return { ...state, basket: newBasket }
        case 'SET_USER':
            return { ...state, user: action.user }

        case 'EMPTY_BASKET':
            return { ...state, basket: [] }

        //wish//
        case 'ADD_TO_WISH':
            return { ...state, wish: [...state.wish, action.item] }
        case 'REMOVE_FROM_WISH':
            let newWish = [...state.wish]
            let index1 = newWish.findIndex(item => item.id === action.id);
            if (index1 >= 0) {
                newWish.splice(index1, 1);
            }
            else {
                console.warn(`cant remove product if ${action.id} as it is not in the basket`);
            }
            return { ...state, wish: newWish }


        default:
            return state;

    }




}
let Flipkartstore = createStore(reducer)
export default Flipkartstore;
