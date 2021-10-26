import styled from 'styled-components';
import { Team } from '../interfaces/team';
import theme from '../theme';
import H6 from './H6';
import PlayerTable from './PlayerTable';

const TeamHeading = styled(H6)`
  padding: ${theme.spacing(2)};
  text-transform: uppercase;
`;

const TeamViewer = ({ team }: { team: Team }): JSX.Element => {
  return (
    <div>
      <TeamHeading>{team.name}</TeamHeading>
      <PlayerTable players={team.firstEleven} />
    </div>
  );
};

export default TeamViewer;
