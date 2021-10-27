import { PlayerSummary } from '../interfaces/player';

export type SortableKey = 'firstName' | 'lastName' | 'squadNumber' | 'position';

/** Sort players by key in ascending or descending order */
export const sortPlayers = (
  players: PlayerSummary[],
  key: SortableKey,
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
  key: SortableKey
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
