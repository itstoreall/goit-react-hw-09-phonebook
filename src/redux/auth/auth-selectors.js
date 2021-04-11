const getIsAuthenticated = (state) => state.auth.isAuthenticated;

const getUsername = (state) => state.auth.user.name;

const getUserEmail = (state) => state.auth.user.email;

// eslint-disable-next-line
export default {
  getIsAuthenticated,
  getUsername,
  getUserEmail,
};
