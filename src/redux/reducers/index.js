import {combineReducers} from 'redux'
import loggedReducer from './RegistrationReducers/isLogged'

const allReducers = combineReducers({
    isLogged: loggedReducer,
})
export default allReducers