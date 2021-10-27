import MatchInfo from './components/MatchInfo';
import { useNextMatch } from './hooks/useNextMatch';
import H6 from './components/generic/H6';
import PlayerTable from './components/table/PlayerTable';
import Page from './pages/index';
import { Player } from './interfaces/player';
import { ID } from './interfaces/generic';
import PlayerStatsModal from './components/PlayerStatsModal';
import React from 'react';

/** App entry point, renders the page and its components */
const App: React.FC = () => {
  const { match, loading } = useNextMatch();
  const [selectedPlayer, selectPlayer] = React.useState<ID<Player>>();

  const resetPlayer = () => {
    selectPlayer(undefined);
  };

  return (
    <>
      {loading && <div>Loading...</div>}
      {selectedPlayer && (
        <PlayerStatsModal onClose={resetPlayer} id={selectedPlayer} />
      )}
      {match && (
        <Page>
          {{
            matchInfo: (
              <MatchInfo
                date={match.date}
                homeTeam={match.home.name}
                awayTeam={match.away.name}
              />
            ),
            homeTeamHeading: <H6>{match.home.name}</H6>,
            awayTeamHeading: <H6>{match.away.name}</H6>,
            homeTeamTable: (
              <PlayerTable
                players={match.home.firstEleven}
                onPlayerSelect={(id) => selectPlayer(id)}
              />
            ),
            awayTeamTable: (
              <PlayerTable
                players={match.away.firstEleven}
                onPlayerSelect={(id) => selectPlayer(id)}
              />
            ),
          }}
        </Page>
      )}
    </>
  );
};

export default App;
