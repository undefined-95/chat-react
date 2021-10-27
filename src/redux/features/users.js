const initialState = {
  authId: null,

  items: [
    {
      id: 1,
      name: "Maga",
      lastName: "Bat",
      login: "admin",
      password: "admin",
    },
    {
      id: 2,
      name: "Mansur",
      lastName: "Vitarg",
      login: "Admin",
      password: "Admin",
    },
    {
      id: 3,
      name: "Amir",
      lastName: "Murdalov",
      login: "admin123",
      password: "admin321",
    },
  ],
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case "user/login":
      return {
        ...state,
        authId: action.payload,
      };
    case "user/logout":
      return {
        ...state,
        authId: null,
      };
    default:
      return state;
  }
};

export const auth = (id) => {
  return { type: "user/login", payload: id };
};

export const LogOut = (id) => {
  return { type: "user/logout", payload: id };
};
