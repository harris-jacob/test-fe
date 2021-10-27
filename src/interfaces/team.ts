import { Player, PlayerSummary } from './player';

export interface Team {
  id: string;
  name: string;
  stadium: string;
  firstEleven: PlayerSummary[];
  __typename: 'Team';
}
