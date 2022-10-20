import customStore from './customStore'

// reducer
function reducer(state = [], action) {
    switch (action.type) {
        case 'add':
            return [...state, { id: action.payload.id, name: action.payload.name }]
        case 'remove':
            return state.filter((user) => user.id !== action.payload.id)
        default:
            return state
    }
}

// store
const store = customStore(reducer)

// subscribe to store
store.subscribe(() => {
    console.log('store changed', store.getState())
})

// actions
store.dispatch({ type: 'add', payload: { id: 1, name: 'marzuk zarir' } })
store.dispatch({ type: 'add', payload: { id: 2, name: 'john doe' } })
store.dispatch({ type: 'remove', payload: { id: 2 } })
