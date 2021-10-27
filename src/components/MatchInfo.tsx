import styled from 'styled-components';
import Card from './generic/Card';
import H6 from './generic/H6';
import theme from '../theme';

interface Props {
  /** Name of the home team */
  homeTeam: string;
  /** Name of the away team */
  awayTeam: string;
  /** date of the match */
  date: string;
}

const MatchInfoCard = styled(Card)`
  margin-bottom: ${theme.spacing(2)};
`;

const MatchInfo = (props: Props) => {
  const { homeTeam, awayTeam, date } = props;

  return (
    <MatchInfoCard>
      <H6>{`${homeTeam} vs ${awayTeam}`}</H6>
      {date}
    </MatchInfoCard>
  );
};

export default MatchInfo;
