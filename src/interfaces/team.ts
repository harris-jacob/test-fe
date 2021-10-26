import { Player } from './player';

export interface Team {
  id: string;
  name: string;
  stadium: string;
  firstEleven: Player[];
  __typename: 'Team';
}
