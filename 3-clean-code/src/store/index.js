import { createStore } from 'redux'
import reducer from '../features/bug'

const store = createStore(reducer)

export default store
