import {  useQuery } from "@apollo/client";
import { GET_NEXT_MATCH } from "./queries/match"
import { Match } from "./interfaces/match";


interface Response {
    nextMatch: Match;
}

interface UseNextMatchResult {
    match: Match | undefined;
    loading: boolean;
    error: Error | undefined
}


/** Query the server for details about the nextMatch */
export const useNextMatch = (): UseNextMatchResult => {
    const {data, loading, error} = useQuery<Response | undefined>(GET_NEXT_MATCH);

    if(data === undefined) {
        return {loading, error, match: undefined}
    }

    return { loading, error, match: data.nextMatch}

}