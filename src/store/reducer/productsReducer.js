const PRODUCTS_LOAD = 'PRODUCTS_LOAD';
const PRODUCTS_DISCONT = 'PRODUCTS_DISCONT';
const PRODUCTS_SORT = 'PRODUCTS_SORT';
const PRICE_FILTER = 'PRICE_FILTER';
const PRODUCTS_RELOAD = 'PRODUCTS_RELOAD';

export const loadProductsAction = (payload) => ({ type: PRODUCTS_LOAD, payload });
export const productsDiscontAction = (payload) => ({ type: PRODUCTS_DISCONT, payload });
export const productsSortAction = (payload) => ({ type: PRODUCTS_SORT, payload });
export const priceFilterAction = (payload) => ({ type: PRICE_FILTER, payload });
export const productsReloadAction = (payload) => ({ type: PRODUCTS_RELOAD, payload });

export const productsReducer = (state = [], action) => {

    if (action.type === PRODUCTS_LOAD) {
        return action.payload.map(item => ({ ...item, show: { price: true, discont_price: true } }))
    } else if (action.type === PRODUCTS_DISCONT) {
        if (action.payload) {
            return state.map(item => {
                item.show.discont_price = item.discont_price !== null;
                return item
            })
        } else {
            return state.map(item => {
                item.show.discont_price = true;
                return item
            })
        }
    } if (action.type === PRODUCTS_SORT) {
        if (+action.payload === 2) {
            return [...state].sort((a, b) => a.price - b.price);
        } else if (+action.payload === 3) {
            return [...state].sort((a, b) => b.discont_price - a.discont_price);
        } else if (+action.payload === 4) {
            return [...state].sort((a, b) => {
                const titleA = a.title.toLowerCase();
                const titleB = b.title.toLowerCase();
                if (titleA < titleB) return -1;
                if (titleA > titleB) return 1;
                return 0;
            });
        } else {
            return state;
        }
    } else if (action.type === PRICE_FILTER) {
        const { min, max } = action.payload;
        return state.map(elem => {
            elem.show.price = elem.price >= min && elem.price <= max;
            return elem
        })
    } else if (action.type === PRODUCTS_RELOAD) {
        return state.map(item => {
            item.show.search = true
            return item
        })
    }
    return state
}

