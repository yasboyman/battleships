import React, { createContext, useReducer } from 'react';
import {createGrid} from "./utils/utils";

interface PlayerType {
  name: string;
  grid: number[][];
  isPlayerActive: boolean;
  shipLocations: number[][];
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
    isPlayerActive: false,
    shipLocations: []
  },
  computer: {
    name: "computer",
    grid: createGrid(),
    isPlayerActive: false,
    shipLocations: []
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



































// import React, { createContext, useContext } from 'react';
// import {createGrid} from "./utils/utils";
//
// type PlayerType = {
//     name: string;
//     grid: number[][];
//     isPlayerActive: boolean;
//     shipLocations: number[][];
// }
//
// type PlayerContextType = {
//     player: PlayerType;
//     computer: PlayerType;
// }
//
// const PlayerContext = createContext<PlayerContextType>({
//     player: {
//         name: "player 1",
//         grid: createGrid(),
//         isPlayerActive: false,
//         shipLocations: []
//     },
//     computer: {
//         name: "computer",
//         grid: createGrid(),
//         isPlayerActive: false,
//         shipLocations: []
//     }
// });
//
// const usePlayerContext = () => useContext(PlayerContext);
// const player = { name: "player 1", grid: createGrid(), isPlayerActive: false, shipLocations: [] };
//
// const computer = { name: "computer", grid: createGrid(), isPlayerActive: false, shipLocations: [] };
//
// const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
//     return (
//         <PlayerContext.Provider value={{ player: player, computer: computer }}>
//     {children}
//     </PlayerContext.Provider>
// );
// }
//
// export { PlayerContext, usePlayerContext };
