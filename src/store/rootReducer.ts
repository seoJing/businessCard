import { combineReducers } from 'redux';

import * as P from './pageCount/reducers';

export const rootReducer = combineReducers({
	pageCounter: P.reducer,
});
