import React from 'react';
import styled from 'styled-components';
import Container from '../components/generic/Container';
import H4 from '../components/generic/H4';

const FlexContainer = styled.div`
  display: flex;
  gap: 10px;
  > * {
    flex-grow: 1;
  }
`;

interface Props {
  children: {
    /** Component that displays Match date and title */
    readonly matchInfo: React.ReactElement;
    /** Component that displays the name of the home team */
    readonly homeTeamHeading: React.ReactElement;
    /** Component that displays the name of the away team */
    readonly awayTeamHeading: React.ReactElement;
    /** Component that displays table of home team players*/
    readonly homeTeamTable: React.ReactElement;
    /** Component that displays table of away team players*/
    readonly awayTeamTable: React.ReactElement;
  };
}

const Page = ({ children }: Props): JSX.Element => (
  <Container>
    <H4>Prima Next Match</H4>
    {children.matchInfo}
    <FlexContainer>
      <div className="home-team">
        {children.homeTeamHeading}
        {children.homeTeamTable}
      </div>
      <div className="away-team">
        {children.awayTeamHeading}
        {children.awayTeamTable}
      </div>
    </FlexContainer>
  </Container>
);

export default Page;
