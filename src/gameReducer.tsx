import { createGrid } from "./components/utils/utils";

export interface PlayerType {
  name: string;
  grid: number[][];
  isPlayerActive: boolean;
  isPlayerReady: boolean;
  shipLocations: number[][];
  shipArray: number[];
}

export type ActionType =
  | { type: "updatePlayerName"; payload: string }
  | { type: "ADD_PLAYER_SHIP_LOCATION"; payload: number[] }
  | { type: "removePlayerShipLocation"; payload: number[] }
  | { type: "updateComputerName"; payload: string }
  | { type: "addComputerShipLocation"; payload: number[] }
  | { type: "removeComputerShipLocation"; payload: number[] }
  | { type: "updatePlayerActive" }
  | { type: "updateComputerActive" }
  | { type: "TEST" };

export interface StateType {
  player: PlayerType;
  computer: PlayerType;
}

export const initialState: StateType = {
  player: {
    name: "player 1",
    grid: createGrid(),
    isPlayerReady: false,
    isPlayerActive: false,
    shipLocations: [],
    shipArray: [2, 3, 4, 5, 6, 7],
  },
  computer: {
    name: "computer",
    grid: createGrid(),
    isPlayerReady: false,
    isPlayerActive: false,
    shipLocations: [],
    shipArray: [2, 3, 4, 5, 6, 7],
  },
};

export const gameReducer = (
  state: StateType,
  action: ActionType
): StateType => {
  const { type, payload } = action;
  switch (type) {
    case "updatePlayerName":
      return {
        ...state,
        player: { ...state.player, name: payload },
      };
    case "ADD_PLAYER_SHIP_LOCATION":
      return {
        ...state,
        player: {
          ...state.player,
          shipLocations: [...state.player.shipLocations, payload],
        },
      };
    default:
      return state;
  }
};
