import { createGrid } from "./components/utils/utils";
import { ActionType, StateType } from "./components/types";

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
    shipLocations: [[]],
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
          shipLocations: [...state.player.shipLocations, { location: payload }],
        },
      };
    default:
      return state;
  }
};
