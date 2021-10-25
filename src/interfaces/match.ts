import { Team } from './team';

export interface Match {
    date: string;
    home: Team;
    away: Team;
    __typename: Match;
}
