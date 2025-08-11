const redux = require('redux')
const reduxlogger = require('redux-logger')

const createStore = redux.createStore
const bindActionCreaters = redux.bindActionCreators
const combineReducers = redux.combineReducers
const logger = reduxlogger.createLogger
const applymiddleware = redux.applyMiddleware


const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCK = 'CAKE_RESTOCK'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCK = 'ICECREAM_RESTOCK'

// Action creator
function ordercake() {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}

function restorecake(e = 1) {
    return {
        type: CAKE_RESTOCK,
        payload: e
    }
}

function orderIcecream(e = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: e
    }
}

function restockIcecream(e = 1) {
    return {
        type: ICECREAM_RESTOCK,
        payload: e
    }
}

// Initial state
const CakeInitialState = {
    noOfCakes: 10,
}
const IceCreamInitialState = {
    noOfIcecream: 10
}

// Reducer
const Cakereducer = (state = CakeInitialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                noOfCakes: state.noOfCakes - action.payload
            }

        case CAKE_RESTOCK:
            return {
                ...state,
                noOfCakes: state.noOfCakes + action.payload
            }
        default:
            return state
    }
}

const IceCreamreducer = (state = IceCreamInitialState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                noOfIcecream: state.noOfIcecream - action.payload
            }

        case ICECREAM_RESTOCK:
            return {
                ...state,
                noOfIcecream: state.noOfIcecream + action.payload
            }
        default:
            return state
    }
}

//combine reducers
const rootreducers = combineReducers({
    cake: Cakereducer,
    icecream: IceCreamreducer
})

// Create store
const store = createStore(rootreducers,applymiddleware(logger))


console.log("Initial state", store.getState())

const unsubscribe = store.subscribe(() => {
    console.log("Updated state", store.getState())
})

// Dispatch actions
// store.dispatch(ordercake())
// store.dispatch(ordercake())
// store.dispatch(ordercake())
// store.dispatch(restorecake("2"))

const action = bindActionCreaters({ ordercake, restorecake, orderIcecream }, store.dispatch)

action.ordercake()
action.ordercake()
action.ordercake()
action.restorecake(3)
action.orderIcecream(4)

unsubscribe()
