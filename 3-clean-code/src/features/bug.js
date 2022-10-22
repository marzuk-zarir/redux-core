import immer from 'immer'

/**
 * this pattern is called `ducks pattern`
 * in this convention, every single file under features folder contains action types creators and reducer
 *
 */

// action types
const BUG_ADDED = 'bugAdded'
const BUG_REMOVED = 'bugRemoved'
const BUG_RESOLVED = 'bugResolved'

// action creators
export const bugAdded = (description) => ({
    type: BUG_ADDED,
    payload: { description }
})

export const bugRemoved = (id) => ({
    type: BUG_REMOVED,
    payload: { id }
})

export const bugResolved = (id) => ({
    type: BUG_RESOLVED,
    payload: { id }
})

let id = 1

// reducer
const reducer = immer((state = [], action) => {
    switch (action.type) {
        case BUG_ADDED:
            state.push({ id: id++, description: action.payload.description, resolved: false })
            break

        case BUG_REMOVED:
            const removeIndex = state.findIndex((bug) => bug.id === action.payload.id)
            state.splice(removeIndex, 1)
            break

        case BUG_RESOLVED:
            const bug = state.find((bug) => bug.id === action.payload.id)
            bug.resolved = true
            break

        default:
            return state
    }
})

export default reducer
