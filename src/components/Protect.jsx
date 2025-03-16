const ShowOnLogin = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem("token");

  if (isLoggedIn) {
    return children;
  }

  return null;
};

export const ShowOnLogout = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem("token");

  if (!isLoggedIn) {
    return children;
  }

  return null;
};

export default ShowOnLogin;
