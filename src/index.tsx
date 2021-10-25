import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './GlobalStyle'
import Container from './components/Container'
import client from './client';
import H4 from './components/H4'
import TeamViewer from './components/TeamVIewer'
import { ApolloProvider } from '@apollo/client';
import { useNextMatch } from './hooks';
import styled from 'styled-components';

const StatsContainer = styled.div`
  display: flex;
  gap: 10px
`

const App: React.FC = () => {
  const { match, loading } = useNextMatch();

  return (
    <Container>
      <H4>Prima Football Scores</H4>
      {loading && <div>Loading...</div>}
      <StatsContainer>
        {match && <TeamViewer team={match.home}/>}
        {match && <TeamViewer team={match.away}/>}
      </StatsContainer>
    </Container>
  );
};

ReactDOM.render(
  <ApolloProvider client={client}>
  <GlobalStyle />
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);