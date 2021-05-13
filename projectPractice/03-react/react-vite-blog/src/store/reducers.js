import { combineReducers } from 'redux'
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
const loading = (state = false, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return action.isLoading
    default:
      return state
  }
}
export default combineReducers({
  visibilityFilter,
  loading
})
