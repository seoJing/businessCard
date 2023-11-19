import type { Action } from 'redux';

export type State = number;

export type SetPageCounterAction = Action<'@pageCounter/DECREMENT'> &
	Action<'@pageCounter/INCREMENT'> & {
		payload: State;
	};

export type Actions = SetPageCounterAction;
