import React, { createContext, useReducer } from 'react';
import {createGrid} from "./utils/utils";

interface PlayerType {
  name: string;
  grid: number[][];
  isPlayerActive: boolean;
  isPlayerReady: boolean
  shipLocations: number[][];
  shipArray: number[]
}

interface StateType {
  player: PlayerType;
  computer: PlayerType;
}

interface Props {
  children: React.ReactNode;
}

type ActionType =
  | { type: 'updatePlayerName'; name: string }
  | { type: 'addPlayerShipLocation'; location: number[] }
  | { type: 'removePlayerShipLocation'; location: number[] }
  | { type: 'updateComputerName'; name: string }
  | { type: 'addComputerShipLocation'; location: number[] }
  | { type: 'removeComputerShipLocation'; location: number[] }
  | { type: 'updatePlayerActive'}
  | { type: 'updateComputerActive'}

const initialState: StateType = {
  player: {
    name: "player 1",
    grid: createGrid(),
    isPlayerReady: false,
    isPlayerActive: false,
    shipLocations: [],
    shipArray: [2, 3, 4, 5, 6, 7]
  },
  computer: {
    name: "computer",
    grid: createGrid(),
    isPlayerReady: false,
    isPlayerActive: false,
    shipLocations: [],
    shipArray: [2, 3, 4, 5, 6, 7],

  }
};

const GameContext = createContext<[StateType, React.Dispatch<ActionType>]>([initialState, () => {}]);

const gameReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'updatePlayerName':
      return {
        ...state,
        player: { ...state.player, name: action.name }
      };
    case 'addPlayerShipLocation':
      return {
        ...state,
        player: {
          ...state.player,
          shipLocations: [...state.player.shipLocations, action.location]
        }
      }
    default:
      return state
  }};

const GameProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  return (
    <GameContext.Provider value={[state, dispatch]}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
