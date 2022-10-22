import { createSelector, createSlice } from '@reduxjs/toolkit'

let id = 1
const bugSlice = createSlice({
    name: 'bug',
    initialState: [],
    reducers: {
        bugAdded(bugs, { payload }) {
            bugs.push({
                id: id++,
                description: payload.description,
                resolved: false,
                projectId: payload.projectId
            })
        },

        bugRemoved(bugs, { payload }) {
            const removeIndex = bugs.findIndex((bug) => bug.id === payload.id)
            bugs.splice(removeIndex, 1)
        },

        bugResolved(bugs, { payload }) {
            const bug = bugs.find((bug) => bug.id === payload.id)
            bug.resolved = true
        }
    }
})

export const { bugAdded, bugRemoved, bugResolved } = bugSlice.actions
export default bugSlice.reducer

// * selector
// any computed property from state is a selector

// export const selectUnresolvedBugs = (state) => {
//     return state.entities.bugs.filter((bug) => !bug.resolved)
// }

// * selector memorization with createSelector (behind the scene use `reselect`)
// createSelector(...inputSelectorFuncs, resultFunc)
// ...inputSelectorFuncs return value received by resultFunc's params
// result func return cached data

export const selectUnresolvedBugs = createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => !bug.resolved)
)
