import { createStore } from 'redux'
import Immutable from 'immutable'
import reducers from './modules/reducer'

export default createStore(reducers);
