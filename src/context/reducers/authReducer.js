// Written by Amrik
export const initialAuthState = {
  isLogged: false,
  isGuest: true,
  selectedLanguage: null,
  user: null,
  child: null,
  isOnBoarded: false,
  feedbackSubmitted: false,
  isScreeningComplete: false,
  isPaid: false,
  splash: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogged: true,
        isGuest: false,
        user: action.payload,
      };

    case 'SIGNUP':
      return {
        ...state,
        isLogged: true,
        isGuest: false,
        user: action.payload,
      };
    case 'ON_BOARDING_PROCESS':
      return {...state, isOnBoarded: true};
    case 'USER_UPDATE':
      return {
        ...state,
        user: {
          ...state.user,
          user: {...state.user.user, ...action.payload},
        },
      };
    case 'PAID_USER':
      return {
        ...state,
        isPaid: action.payload,
      };
    case 'PAID_USER_UPDATE':
      return {
        ...state,
        isPaid: {
          ...state.isPaid,
          isPaid: action.payload,
        },
      };
    case 'LOGOUT':
      return {
        ...state,
        isLogged: false,
        isGuest: false,
        user: null,
        child: null,
        feedbackSubmitted: false,
      };
    default:
      return state;
  }
};
