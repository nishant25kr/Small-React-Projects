const redux = require('redux')

const createStore = redux.createStore

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCK = 'CAKE_RESTOCK'

// Action creator
function ordercake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}

function restorecake(e) {
    return {
        type: CAKE_RESTOCK,
        quantity: e
    }
}

// Initial state
const initialState = {
    noOfCakes: 10
}

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                noOfCakes: state.noOfCakes - action.quantity
            }
        
        case (action.type):
            return{
                ...state,
                noOfCakes : state.noOfCakes + 1
            }

        default:
            return state
    }
}

// Create store
const store = createStore(reducer)

console.log("Initial state", store.getState())

const unsubscribe = store.subscribe(() => {
    console.log("Updated state", store.getState())
})

// Dispatch actions
store.dispatch(ordercake())
store.dispatch(ordercake())
store.dispatch(ordercake())
store.dispatch(restorecake("2"))

unsubscribe()
