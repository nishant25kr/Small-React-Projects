const redux = require('redux')
const { createStore, bindActionCreators } = redux

const initialState = {
    name: "Nishant",
    address: {
        street: "subhash palli",
        city: "Kne",
        state: "Br"
    }
}

const STREET_UPDATE = 'STREET_UPDATE'

// Action creator
function updateStreet(newStreet) {
    return {
        type: STREET_UPDATE,
        payload: newStreet
    }
}

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATE:
            return {
                ...state,
                address: {
                    ...state.address,
                    street: action.payload
                }
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

// Bind actions
const actions = bindActionCreators({ updateStreet }, store.dispatch)

// Dispatch action
actions.updateStreet("MG Road")

unsubscribe()