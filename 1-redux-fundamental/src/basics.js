import { createStore } from 'redux'

// redux have 3 building block
// 1. action
// 2. reducer
// 3. store

// * reducer
// reducer have to be a pure function in redux
// reducer should have update the state immutable way

let lastId = 1

function reducer(state = [], action) {
    switch (action.type) {
        case 'bugAdded':
            return [
                ...state,
                {
                    id: lastId++,
                    description: action.payload.description,
                    resolved: false
                }
            ]

        case 'bugRemoved':
            return state.filter((bug) => action.payload.id !== bug.id)

        default:
            return state
    }
}

// * store
// store is a higher order function
// store object have some methods
// dispatch() -> is for dispatch an action
// getState() -> is for to get current data in store
// subscribe() -> is for subscribe. it execute callback every time when store change. it returns an unsubscribe func

const store = createStore(reducer)

// * action
// an action have to type prop
// payload prop is a conventional way to pass data to reducer. it is not mandatory

store.subscribe(() => {
    console.log('store changed', store.getState())
})

store.dispatch({ type: 'bugAdded', payload: { description: 'find a new bug' } })
store.dispatch({ type: 'bugAdded', payload: { description: 'find a another bug' } })

store.dispatch({ type: 'bugRemoved', payload: { id: 2 } })
store.dispatch({ type: 'bugRemoved', payload: { id: 1 } })
