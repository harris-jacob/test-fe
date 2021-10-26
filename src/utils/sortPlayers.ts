import { Player } from '../interfaces/player';

export type SortableKey = 'firstname' | 'lastname' | 'squadNumber' | 'position';

/** Sort players by key in ascending or descending order */
export const sortPlayers = (
  players: Player[],
  key: SortableKey,
  descending = false
): Player[] => {
  const newPlayers = [...players];
  newPlayers.sort((a: Player, b: Player) => comparePlayers(a, b, key));

  return descending ? newPlayers.reverse() : newPlayers;
};

const comparePlayers = (
  playerA: Player,
  playerB: Player,
  key: SortableKey
): number => {
  switch (key) {
    case 'firstname':
      return stringCompare(playerA.firstname, playerB.firstname);
    case 'lastname':
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
