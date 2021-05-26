import {EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_SAVE_SECCESS} from '../actions/Types';

const INITIAL_STATE = {};

export default (sate = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return action.payload;
    case EMPLOYEE_SAVE_SECCESS:
      return INITIAL_STATE;
    default:
      return sate;
  }
};
