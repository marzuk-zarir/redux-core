// import { createAction, createReducer } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

// * action types & creator same time
// * returns action creator. it will pass any type(array, obj, string) parameter to payload property
// export const bugAdded = createAction('bugAdded')
// export const bugRemoved = createAction('bugRemoved')
// export const bugResolved = createAction('bugResolved')

let id = 1

// * reducer with dynamic property type
// * behind the scene redux toolkit use immer. so we don't need to pass the state immutably
// export default createReducer([], {
//     [bugAdded.type]: (bugs, action) => {
//         bugs.push({ id: id++, description: action.payload.description, resolved: false })
//     },

//     [bugRemoved.type]: (bugs, action) => {
//         const removeIndex = bugs.findIndex((bug) => bug.id === action.payload.id)
//         bugs.splice(removeIndex, 1)
//     },

//     [bugResolved.type]: (bugs, action) => {
//         const bug = bugs.find((bug) => bug.id === action.payload.id)
//         bug.resolved = true
//     }
// })

// ! with more simplify with slice
// createSlice is self explanatory. namespace type like 'bug/bugAdded'
// reducer's method name use as type

const bugSlice = createSlice({
    name: 'bug',
    initialState: [],
    reducers: {
        bugAdded(bugs, action) {
            bugs.push({ id: id++, description: action.payload.description, resolved: false })
        },

        bugRemoved(bugs, action) {
            const removeIndex = bugs.findIndex((bug) => bug.id === action.payload.id)
            bugs.splice(removeIndex, 1)
        },

        bugResolved(bugs, action) {
            const bug = bugs.find((bug) => bug.id === action.payload.id)
            bug.resolved = true
        }
    }
})

export const { bugAdded, bugRemoved, bugResolved } = bugSlice.actions

export default bugSlice.reducer
