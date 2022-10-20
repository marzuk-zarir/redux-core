import { bugAdded, bugRemoved, bugResolved } from './actionCreators'
import store from './store'

store.subscribe(() => {
    console.log('store changed', store.getState())
})

store.dispatch(bugAdded('new bug added'))
store.dispatch(bugAdded('another bug added'))
store.dispatch(bugResolved(2))
store.dispatch(bugRemoved(2))
