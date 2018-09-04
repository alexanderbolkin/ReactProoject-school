import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.service';
import { alertActions } from './alert.actions';
import { history } from '../helpers/history';
import { authHeader } from '../helpers/auth-header'

export const userActions = {
  login,
  logout,
  register,
  getAll
  
};

function login(email, password) 
{
  return dispatch => 
  {
    dispatch(request());

    userService.login(email, password)
      .then(
        user => {
      console.log('===here444===')
      console.log(user)

          dispatch(success(user));
          history.push(`${process.env.PUBLIC_URL}/`);
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  };

  function request() { return { type: userConstants.LOGIN_REQUEST } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}



function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}



function register(firstName,lastName,username,email, password) 
{
  return dispatch => 
  {
    dispatch(request());

    userService.register(firstName,lastName,username, email, password)
      .then(
        user => {
          dispatch(success(user));
          history.push(`${process.env.PUBLIC_URL}/`);
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  };

  function request() { return { type: userConstants.REGISTER_REQUEST } }
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch('/users', requestOptions).then(handleResponse);
}

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }

  return response.json();
}


