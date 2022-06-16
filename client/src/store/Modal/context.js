import React, { createContext, useReducer } from "react";

const ModalReducer = (state, action) => {
  switch (action.type) {
    case "open":
      return action.payload;
    case "close":
      return null;
    default:
      return state;
  }
};

const ModalContext = createContext();

export const ModalContextProvider = (props) => {
  const [ModalContent, dispatch] = useReducer(ModalReducer, null);

  return (
    <ModalContext.Provider
      value={{
        ModalContent,
        dispatch,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
