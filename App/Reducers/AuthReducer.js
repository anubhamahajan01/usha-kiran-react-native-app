const AuthReducer = (state = { token: '' }, action) => {
  switch (action.type) {
    case 'STORE_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'USERNAME_CUSTOMER':
      return {
        ...state,
        username: action.username,
      };

    case 'CLEAR_USER':
      return {
        ...state,
        token: '',
        username: '',
      };

    default:
      return state;
  }
};
export default AuthReducer;
