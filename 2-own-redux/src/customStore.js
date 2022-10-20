export default function createStore(reducer) {
    let state
    const listeners = []

    return {
        getState() {
            return state
        },

        dispatch(action) {
            state = reducer(state, action)
            listeners.forEach((listener) => listener())
        },

        subscribe(cb) {
            listeners.push(cb)
        }
    }
}
