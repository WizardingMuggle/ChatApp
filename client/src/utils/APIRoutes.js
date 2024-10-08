export const host = "https://chatapp-4izn.onrender.com";
//export const host = "http://localhost:8000";
// export const host =
//   process.env.REACT_APP_DEPLOYMENT === "DEV"
//     ? "http://localhost:8000"
//     : null;
 
export const loginRoute = `${host}/api/auth/login`;
export const registerRoute = `${host}/api/auth/register`;
export const logoutRoute = `${host}/api/auth/logout`;
export const allUsersRoute = `${host}/api/auth/allusers`;
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const recieveMessageRoute = `${host}/api/messages/getmsg`;
export const setAvatarRoute = `${host}/api/auth/setavatar`;
export const firebaseLoginRoute = `${host}/api/auth/firebaselogin`;
export const checkUserNameRoute = `${host}/api/auth/checkusername`;
