import React from 'react';
import { PlayerSummary } from '../interfaces/player';

export type PlayerSortKey =
  | 'firstName'
  | 'lastName'
  | 'squadNumber'
  | 'position';

interface UsePlayerSortReturn {
  /** players sorted by selected key */
  sortedPlayers: PlayerSummary[];
  /**
   * function that updates the sortBy key.
   * multiple executions with the same key will switch between ascending and descensing
   **/
  sortHandler: (sortKey: PlayerSortKey) => void;
}

/** hook that handles sorting logic for the player table  */
export const usePlayerSort = (
  players: PlayerSummary[]
): UsePlayerSortReturn => {
  const [sortKey, setSortKey] = React.useState<PlayerSortKey>('lastName');
  const [isDescending, setIsDescending] = React.useState<boolean>(false);

  // Function to update sort logic when the header is clicked
  const sortHandler = (newKey: PlayerSortKey) => {
    // if the key hasn't changed update the sort order
    if (newKey === sortKey) {
      setIsDescending(!isDescending);
    } else {
      // otherwise updated the key and reset the order
      setSortKey(newKey);
      setIsDescending(false);
    }
  };

  const sortedPlayers = sortPlayers(players, sortKey, isDescending);

  return { sortedPlayers, sortHandler };
};

/** Sort players by key in ascending or descending order */
export const sortPlayers = (
  players: PlayerSummary[],
  key: PlayerSortKey,
  descending = false
): PlayerSummary[] => {
  const newPlayers = [...players];
  newPlayers.sort((a: PlayerSummary, b: PlayerSummary) =>
    comparePlayers(a, b, key)
  );

  return descending ? newPlayers.reverse() : newPlayers;
};

const comparePlayers = (
  playerA: PlayerSummary,
  playerB: PlayerSummary,
  key: PlayerSortKey
): number => {
  switch (key) {
    case 'firstName':
      return stringCompare(playerA.firstname, playerB.firstname);
    case 'lastName':
      return stringCompare(playerA.lastname, playerB.lastname);
    case 'position':
      return stringCompare(playerA.position, playerB.position);
    case 'squadNumber':
      return playerA.squadNumber - playerB.squadNumber;
    default:
      throw new Error('unreachable code');
  }
};

// returns 1 if a>b, 0 if a==b & -1 if a<b
const stringCompare = (a: string, b: string): number => {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
};
