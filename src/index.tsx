import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './GlobalStyle';
import Container from './components/Container';
import client from './client';
import H4 from './components/H4';
import MatchStats from './components/MatchStats';
import { ApolloProvider } from '@apollo/client';
import { useNextMatch } from './hooks';

const App: React.FC = () => {
  const { match, loading } = useNextMatch();

  return (
    <Container>
      <H4>Prima Football Scores</H4>
      {loading && <div>Loading...</div>}
      {match && <MatchStats match={match} />}
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
