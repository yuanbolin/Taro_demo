import {
  SET,
} from '../constants/global'

export function SETGLOBAL(payload) {
  return dispatch => {
    dispatch({
      type: SET,
      payload
    })
  }
}
