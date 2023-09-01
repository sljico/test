import { createContext } from "react";
import React from "react";

type State = {
  authenticated: boolean;
  isLoading: boolean;
};

type Action = {
  type: string;
  payload?: any | null;
};

type Dispatch = (action: Action) => void;
type StateContextProviderProps = { children: React.ReactNode };

const initialState = {
  authenticated: false,
  isLoading: true,
};

export const AuthStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function reducer(state: State, action: Action) {
  console.log(action);
  switch (action.type) {
    case "SUCCESS_SIGNIN": {
      return {
        ...state,
        authenticated: true,
        isLoading: false,
      };
    }
    case "LOADING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

function useAuthState() {
  const context = React.useContext(AuthStateContext);
  if (!context) throw new Error("useAuthState must be used in AuthProvider");

  return context;
}

function AuthProvider(props: StateContextProviderProps) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  console.log(state);

  return (
    <AuthStateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthStateContext.Provider>
  );
}

export { AuthProvider, useAuthState };
