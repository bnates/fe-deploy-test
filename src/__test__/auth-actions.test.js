import {tokenSet, logout, signupRequest, loginRequest} from '../action/auth-actions.js';
import superagent from 'superagent';

const randomNum = max => {
  return Math.floor(Math.random() * max);
}

const mockUser = {
  username: `testingit${randomNum(5000)}`,
  email: `testingit${randomNum(5000)}@email.net`,
  password: '123456789'
}

describe('Auth Actions', () => {
  let tempUser;

  test('tokenSet should return a TOKEN_SET action', () => {
    let action = tokenSet({ token: '12345' });
    expect(action.type).toEqual('TOKEN_SET');
    expect(action.payload).toBeTruthy();
    expect(action.payload.token).toBe('12345');
  });

  test('logout should return a LOGOUT action', () => {
    let action = logout();
    expect(action).toEqual({
      type: 'LOGOUT'
    })
  });

  // NOTE: async tests were located here
});
