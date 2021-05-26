import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE} from '../actions/Types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
};

export default (sate = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      //action.payload === {prop: 'naem', value: 'Juan'}
      //[action.payload.prop] is an interpolations
      return {...sate, [action.payload.prop]: action.payload.value};
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    default:
      return sate;
  }
};
