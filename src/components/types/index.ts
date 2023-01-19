import React from "react";

export type ActionType =
  | { type: "updatePlayerName"; payload: string }
  | {
      type: "ADD_PLAYER_SHIP_LOCATION";
      payload: { shipName: string; location: number[] };
    }
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

export interface PlayerType {
  name: string;
  grid: number[][];
  isPlayerActive: boolean;
  isPlayerReady: boolean;
  shipLocations: number[][];
  shipArray: number[];
}

export type boardProps = {
  name: string;
  grid: React.ReactNode;
  shipArray: number[];
};

export type gridBoxPropTypes = {
  label?: string;
  color?: string;
};
