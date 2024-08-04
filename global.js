// global.js

let isLoggedIn = false;

const updateLoginStatus = (status) => {
  isLoggedIn = status;
  console.log('Login status updated to:', isLoggedIn);
};

export { isLoggedIn, updateLoginStatus };