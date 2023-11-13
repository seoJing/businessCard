import type { Action, combineReducers } from 'redux';
import type { AppState } from './Appstate';

import * as L from './listEntities';
import * as LO from './listidOrders';
import * as LC from './listidCardidOrders';
import * as C from './cardEntities';

const initialAppState = {};

export const rootReducer = combineReducers({
    listEntities: L.reducer,
	listidOrders: LO.reducer,
	listidCardidOrders: LC.reducer,
	cardEntities: C.reducer
})
