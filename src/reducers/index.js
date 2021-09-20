import { combineReducers } from 'redux';
import {issuerReducer} from '../components/issuer/reducer'
import {issuerContactReducer} from '../components/issuerContact/reducer'
import {filingContactReducer} from '../components/filingContact/reducer'

export default combineReducers({
  issuer: issuerReducer, 
  issuerContact: issuerContactReducer,
  filingContact: filingContactReducer,
});
