const initialState = {
  items: [
    {
      myId: 1,
      contactId: 2,
      text: "hi",
    },
    {
      myId: 2,
      contactId: 1,
      text: "hello",
    },
    {
      myId: 1,
      contactId: 2,
      text: "world",
    },
    {
      myId: 2,
      contactId: 1,
      text: "What you the name?",
    },
  ],
};

export const message = (state = initialState, action) => {
  switch (action.type) {
    case "add/message/fulfilled":
      return {
        ...state,
        items: [
          ...state.items,
          {
            myId: action.payload.message.myId,
            contactId: Number(action.payload.id),
            text: action.payload.message.text,
          },
        ],
      };
    default:
      return state;
  }
};

export const addMessage = () => {
  return { type: "add/message/fulfilled" };
};
