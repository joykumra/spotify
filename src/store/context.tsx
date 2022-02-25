import React, { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { Action } from "../models/Action";
import { Context } from "../models/Context";

const StateContext = createContext<[Context, (arg: Action) => void]>([
  initialState,
  () => {},
]);

export const StateProvider: React.FC = (props) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {props.children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
