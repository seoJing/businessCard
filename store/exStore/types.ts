import type {Action} from 'redux'

export type State = Date;

export type SetExAction = Action<'@ex/setEx'> & {
    payload: State;
}

export type Actions = SetExAction