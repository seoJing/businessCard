import * as E from './exStore/types';
import * as P from './pageCount/types';

export type AppState = {
	ex: E.State;
	pageCounter: P.State;
};
