import React from 'react';
import styled from 'styled-components';
import TeamViewer from './TeamVIewer';
import { Match } from '../interfaces/match';
import Card from './Card';
import H6 from './H6';
import theme from '../theme';

const StatsContainer = styled.div`
  display: flex;
  gap: 10px;
  > * {
    flex-grow: 1;
  }
`;

const MatchInfoCard = styled(Card)`
  margin-bottom: ${theme.spacing(2)};
`;

const MatchStats = ({ match }: { match: Match }): JSX.Element => {
  const matchInfo = (
    <MatchInfoCard>
      <H6>{`${match.home.name} vs ${match.away.name}`}</H6>
      {match.date}
    </MatchInfoCard>
  );

  return (
    <>
      {matchInfo}
      <StatsContainer>
        {match && <TeamViewer team={match.home} />}
        {match && <TeamViewer team={match.away} />}
      </StatsContainer>
    </>
  );
};

export default MatchStats;
