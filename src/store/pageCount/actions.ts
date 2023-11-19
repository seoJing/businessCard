import type * as T from './types';

export const setPageCounter = (payload: T.State): T.SetPageCounterAction => ({
	type: '@pageCounter/setPageCounter',
	payload,
});
