import React, { createContext, useMemo, useReducer } from "react";
import { gameReducer, initialState } from "../gameReducer";
import { StateType, ActionType } from "../gameReducer";

interface Props {
  children: React.ReactNode;
}
// @ts-ignore
export const GameContext = createContext([initialState, () => {}]);

export const GameProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const memoizedState = useMemo(() => state, [state]);
  const memoizedDispatch = useMemo(() => dispatch, [dispatch]);

  return (
    <GameContext.Provider value={[memoizedState, memoizedDispatch]}>
      {children}
    </GameContext.Provider>
  );
};
