import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { Player } from '../interfaces/player';
import { SortableKey, sortPlayers } from '../utils/sortPlayers';
import theme from '../theme';

const Table = styled.div`
  text-align: left;
  display: table;
  width: 100%;
  border-spacing: 0 ${theme.spacing(1)};
`;

const TableRow = styled(Card)`
  display: table-row;
  &:hover {
    background-color: ${theme.palette.attention};
  }
  & > div:first-child {
    border-radius: ${theme.spacing(2)} 0 0 ${theme.spacing(2)};
  }
  & > div:last-child {
    border-radius: 0 ${theme.spacing(2)} ${theme.spacing(2)} 0;
  }
`;

const TableItem = styled.div`
  display: table-cell;
  padding: ${theme.spacing(3)};
`;

const TableHeader = styled.div`
  display: table-row;
`;

const HeaderItem = styled.div`
  ${theme.typography.h6}
  display: table-cell;
  padding: ${theme.spacing(3)};
  &:hover {
    background-color: ${theme.palette.attention};
  }
`;

const makeRow = (player: Player): JSX.Element => {
  const { __typename, id, ...restPlayer } = player;

  return (
    <TableRow key={id}>
      {Object.entries(restPlayer).map((v) => (
        <TableItem key={v[0]}>{v[1]}</TableItem>
      ))}
    </TableRow>
  );
};

const TableHeaders = (): JSX.Element => {
  const headers = ['Firstname', 'Lastname', 'Position', 'Number'];

  return (
    <TableHeader>
      {headers.map((v: string) => (
        <HeaderItem>{v}</HeaderItem>
      ))}
    </TableHeader>
  );
};

/** Component renders a table of player details*/
const PlayerTable = ({ players }: { players: Player[] }): JSX.Element => {
  const [sortKey, setSortKey] = React.useState<SortableKey>('lastname');
  const [isDescending, setIsDescending] = React.useState<boolean>(false);

  return (
    <Table>
      <TableHeaders />
      {sortPlayers(players, sortKey, isDescending).map((v) => makeRow(v))}
    </Table>
  );
};

export default PlayerTable;
