import * as T from './types';

const initialState: T.State = 0;

export const reducer = (state: T.State = initialState, action: T.Actions) => {
	switch (action.type) {
		case '@pageCounter/DECREMENT':
			state - 1;
			return action.payload;
		case '@pageCounter/INCREMENT':
			state + 1;
			return action.payload;
			break;
	}
	return state;
};
