import { bugAdded, bugRemoved, bugResolved } from './features/bug'
import store from './store'

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(bugAdded('new bug found'))
store.dispatch(bugAdded('another new bug found'))
store.dispatch(bugResolved(2))
store.dispatch(bugRemoved(2))
