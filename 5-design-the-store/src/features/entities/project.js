import { createSlice } from '@reduxjs/toolkit'

let id = 1
const projectSlice = createSlice({
    name: 'project',
    initialState: [],
    reducers: {
        projectAdded(projects, action) {
            projects.push({
                id: id++,
                name: action.payload.name
            })
        },

        projectRemoved(projects, action) {
            const removeIndex = projects.findIndex((bug) => bug.id === action.payload.id)
            projects.splice(removeIndex, 1)
        }
    }
})

export const { projectAdded, projectRemoved } = projectSlice.actions
export default projectSlice.reducer
