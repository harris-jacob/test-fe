import { gql } from '@apollo/client';
import { PLAYER_SUMMARY } from './player';

const TEAM_DETAILS = gql`
  ${PLAYER_SUMMARY}
  fragment TeamDetails on Team {
    name
    stadium
    firstEleven {
      ...PlayerSummary
    }
  }
`;

export const GET_NEXT_MATCH = gql`
  ${TEAM_DETAILS}
  query {
    nextMatch {
      date
      home {
        ...TeamDetails
      }
      away {
        ...TeamDetails
      }
    }
  }
`;
