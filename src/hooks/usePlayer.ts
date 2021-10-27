import { useQuery } from '@apollo/client';
import { ID } from '../interfaces/generic';
import { Player } from '../interfaces/player';
import { GET_PLAYER_DETAILS } from '../queries/player';

interface Response {
  player: Player;
}

interface UsePlayerResult {
  player: Player | undefined;
  loading: boolean;
  error: Error | undefined;
}

/** Query the server for details about the nextMatch */
export const usePlayer = (playerID: ID<Player>): UsePlayerResult => {
  const { data, loading, error } = useQuery<Response | undefined>(
    GET_PLAYER_DETAILS,
    {
      variables: { id: playerID },
    }
  );

  if (data === undefined) {
    return { loading, error, player: undefined };
  }

  return { loading, error, player: data.player };
};
