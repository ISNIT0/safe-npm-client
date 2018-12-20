import { store } from 'react-easy-state'

const state = store<AppState>({
    test: 0
})

export {
    state
}