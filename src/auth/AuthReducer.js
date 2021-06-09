import Types from "../types/Types";

const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case Types.login:
      return {
        ...action.payload,
        logged: true,
      };

    case Types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};

export default AuthReducer;
