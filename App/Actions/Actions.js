export const storeToken = (token) => (dispatch) => {
  dispatch({ type: 'STORE_TOKEN', token: token });
};

export const clearUser = () => (dispatch) => {
  dispatch({ type: 'CLEAR_USER' });
};

export const userNameStore = (username) => (dispatch) => {
  dispatch({ type: 'USERNAME_CUSTOMER', username: username });
};
