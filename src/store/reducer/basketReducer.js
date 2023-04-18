const BASKET_INCREMENT = 'BASKET_INCREMENT';
const BASKET_DECREMENT = 'BASKET_DECREMENT';
const BASKET_ADD = 'BASKET_ADD';
const BASKET_CLEAR = 'BASKET_CLEAR';

export const basketIncrementAction = (payload) => ({ type: BASKET_INCREMENT, payload });
export const basketDecrementAction = (payload) => ({ type: BASKET_DECREMENT, payload });
export const basketAddAction = (payload) => ({ type: BASKET_ADD, payload });
export const basketClearAction = (payload) => ({ type: BASKET_CLEAR, payload });


// const defaultState = [
//     { id: 1, count: 4 },
//     { id: 2, count: 32 },
//     { id: 3, count: 22 },
//     { id: 4, count: 12 },
//     { id: 31, count: 2 },
//     { id: 30, count: 2 },
// ]


export const basketReducer = (state = [], action) => {
    if (action.type === BASKET_INCREMENT) {
        const product = state.find(({ id }) => action.payload === id);
        product.count++;
        return [...state]
    } else if (action.type === BASKET_DECREMENT) {
        const product = state.find(({ id }) => action.payload === id);
        if (product.count === 1) {
            return state.filter(item => item !== product);
        } else {
            product.count--;
            return [...state]
        }
    } else if (action.type === BASKET_ADD) {
        const product = state.find(({ id }) => action.payload === id);
        if (product === undefined) {
            return [...state, { id: action.payload, count: 1 }]
        } else {
            product.count++;
            return [...state]
        }
    } else if (action.type === BASKET_CLEAR) {
        return state.filter(item => item.id !== action.payload)
    }
    return state
}