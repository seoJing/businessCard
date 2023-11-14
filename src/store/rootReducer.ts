import { combineReducers } from 'redux';

import * as E from './exStore/reducers';

export const rootReducer = combineReducers({
	listEntities: E.reducer,
});
