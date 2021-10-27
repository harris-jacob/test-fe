import React from 'react';
import { PlayerSummary } from '../interfaces/player';
import { SortableKey, sortPlayers } from '../utils/sortPlayers';

interface UsePlayerSortReturn {
  /** players sorted by selected key */
  sortedPlayers: PlayerSummary[];
  /**
   * function that updates the sortBy key.
   * multiple executions with the same key will switch between ascending and descensing
   **/
  sortHandler: (sortKey: SortableKey) => void;
}

/** hook that handles sorting logic for the player table  */
export const usePlayerSort = (
  players: PlayerSummary[]
): UsePlayerSortReturn => {
  const [sortKey, setSortKey] = React.useState<SortableKey>('lastName');
  const [isDescending, setIsDescending] = React.useState<boolean>(false);

  // Function to update sort logic when the header is clicked
  const sortHandler = (newKey: SortableKey) => {
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
