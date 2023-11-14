import type * as T from './types'

export const setEx = (payload: T.State): T.SetExAction => ({
    type: '@ex/setEx',
    payload
})