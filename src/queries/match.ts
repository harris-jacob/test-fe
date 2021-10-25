import { gql } from "@apollo/client";

const PLAYER_DETAILS = gql`
    fragment PlayerDetails on Player {
        firstname
        lastname
        position
        squadNumber
    }
`

const TEAM_DETAILS = gql`
    ${PLAYER_DETAILS}
    fragment TeamDetails on Team {
        name
        stadium
        firstEleven {
            ...PlayerDetails
        }
    }
`

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
`