import { configureStore } from '@reduxjs/toolkit'
import reducer from './features'

// * for best performance we can use object instead of array

// array O(n)
// [ { id: 1, name: 'john' }, { id: 2, name: 'sam' } ] => find by id => array.find(n => n.id === id)

// object O(1)
// { 1: { id: 1, name: 'john' }, 2: { id: 2, name: 'sam' } } => find by id => object[id]

// * or best of both world
// byId for O(1)
// order of name by allIds array
// {
//     byId: { 1: { id: 1, name: 'john' }, 2: { id: 2, name: 'sam' }, 3: { id: 3, name: 'smith' } },
//     allIds: [2, 1, 3]
// }

// * store design
// we can use redux as both local and global state (except form local state which is change every key stroke)
// in big application it will very useful for debug with devtool and have a unified way to manage our app state
// we can use global state like this:

// {
//     entities: {
//         user: {...},
//         cart: {...},
//         ...
//     },
//     auth: {...},
//     ui: {
//          products: {
//              query: '',
//              sortBy: '',
//              ...
//          }
//     },
//     ...
// }

export default configureStore({ reducer })
