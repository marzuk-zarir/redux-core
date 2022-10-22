import store from './store'

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(bugAdded({ description: 'find a bug' }))
store.dispatch(bugResolved({ id: 1 }))
store.dispatch(bugRemoved({ id: 1 }))
