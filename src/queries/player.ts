import { gql } from '@apollo/client';
import { ID } from '../interfaces/generic';
import { Player } from '../interfaces/player';

export const PLAYER_SUMMARY = gql`
  fragment PlayerSummary on Player {
    id
    firstname
    lastname
    position
    squadNumber
  }
`;

export const GET_PLAYER_DETAILS = gql`
  ${PLAYER_SUMMARY}
  query Player($id: ID!) {
    player(id: $id) {
      ...PlayerSummary
      nationality
      height
    }
  }
`;
