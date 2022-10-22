import { bugAdded, bugResolved, selectUnresolvedBugs } from './features/entities/bug'
import { projectAdded } from './features/entities/project'
import store from './store'

store.subscribe(() => {
    console.log('state changed', store.getState())
})

store.dispatch(projectAdded({ name: 'express api server' }))
store.dispatch(projectAdded({ name: 'django api server' }))

store.dispatch(bugAdded({ description: 'bug 1', projectId: 1 }))
store.dispatch(bugAdded({ description: 'bug 2', projectId: 2 }))
store.dispatch(bugAdded({ description: 'bug 3', projectId: 1 }))
store.dispatch(bugAdded({ description: 'bug 4', projectId: 1 }))
store.dispatch(bugAdded({ description: 'bug 5', projectId: 2 }))

store.dispatch(bugResolved({ id: 1 }))
store.dispatch(bugResolved({ id: 5 }))
store.dispatch(bugResolved({ id: 2 }))

const firstCall = selectUnresolvedBugs(store.getState())
const secondCall = selectUnresolvedBugs(store.getState())

// without createSelector
// console.log(firstCall === secondCall) // false => bcz not memorize our func call

// with createSelector
console.log(firstCall === secondCall) // true
