import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SECCESS,
} from './Types';
export const employeeUpdate = ({prop, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: {prop, value},
  };
};

export const employeeCreate = ({name, phone, shift}) => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({name, phone, shift})
      .then(() => {
        dispatch({type: EMPLOYEE_CREATE});
        Actions.employeeList();
      });
  };
};

export const employeesFetch = () => {
  const {currentUser} = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapShot => {
        dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapShot.val()});
      });
  };
};

export const employeeSave = ({name, phone, shift, uid}) => {
  const {currentUser} = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({name, phone, shift, uid})
      .then(() => {
        dispatch({type: EMPLOYEE_SAVE_SECCESS});
        Actions.employeeList({});
      });
  };
};

export const employeeDelete = ({uid}) => {
  const {currentUser} = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.employeeList({});
      });
  };
};
