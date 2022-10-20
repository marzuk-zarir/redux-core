import produce from 'immer'
import * as actions from './actionTypes'

let id = 1

// export default function reducer(state = [], action) {
//     switch (action.type) {
//         case actions.BUG_ADDED:
//             return [
//                 ...state,
//                 {
//                     id: id++,
//                     description: action.payload.description,
//                     resolved: false
//                 }
//             ]

//         case actions.BUG_REMOVED:
//             return state.filter((bug) => bug.id !== action.payload.id)

//         case actions.BUG_RESOLVED:
//             return state.map((bug) =>
//                 bug.id === action.payload.id ? { ...bug, resolved: true } : bug
//             )

//         default:
//             return state
//     }
// }

// or, with immer
// export default function reducer(state = [], action) {
//     return produce(state, (draft) => {
//         switch (action.type) {
//             case actions.BUG_ADDED:
//                 draft.push({
//                     id: id++,
//                     description: action.payload.description,
//                     resolved: false
//                 })
//                 break

//             case actions.BUG_REMOVED:
//                 const removedBugIndex = draft.findIndex((bug) => bug.id === action.payload.id)
//                 draft.splice(removedBugIndex, 1)
//                 break

//             case actions.BUG_RESOLVED:
//                 const resolvedBug = draft.find((bug) => bug.id === action.payload.id)
//                 resolvedBug.resolved = true
//                 break
//         }
//     })
// }

// or, more simple with immer
const reducer = produce((draft = [], action) => {
    switch (action.type) {
        case actions.BUG_ADDED:
            draft.push({
                id: id++,
                description: action.payload.description,
                resolved: false
            })
            break

        case actions.BUG_REMOVED:
            const removedBugIndex = draft.findIndex((bug) => bug.id === action.payload.id)
            draft.splice(removedBugIndex, 1)
            break

        case actions.BUG_RESOLVED:
            const resolvedBug = draft.find((bug) => bug.id === action.payload.id)
            resolvedBug.resolved = true
            break

        default:
            return draft
    }
})

export default reducer
