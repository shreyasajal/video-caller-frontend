import { combineReducers } from 'redux';
import dashboardReducer from './reducers/Dashboard_reducer';
import callReducer from './reducers/Call_reducer';

export default combineReducers({
  dashboard: dashboardReducer,
  call: callReducer
});
