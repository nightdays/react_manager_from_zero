import { combineReducers } from 'redux'

import specialLocal from './specialLocal';
import survey from './survey';
import user from './user';

const reducers = {
    user,
    specialLocal,
    survey
}

export default combineReducers(reducers);