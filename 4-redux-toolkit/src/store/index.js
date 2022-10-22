import { configureStore } from '@reduxjs/toolkit'
import reducer from '../features/bug'

// configure store helps to redux devtool support
// configure store receive an object
export default configureStore({ reducer })
