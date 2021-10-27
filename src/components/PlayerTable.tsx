import React from 'react';
import styled from 'styled-components';
import Card from './generic/Card';
import { Player, PlayerSummary } from '../interfaces/player';
import { usePlayerSort } from '../hooks/usePlayerSort';
import theme from '../theme';
import { SortableKey } from '../utils/sortPlayers';
import { ID } from '../interfaces/generic';

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

interface RowProps {
  player: PlayerSummary;
  onClick: () => void;
}

const Row = ({ player, onClick }: RowProps): JSX.Element => {
  const { __typename, id, ...restPlayer } = player;

  return (
    <TableRow onClick={onClick} key={id}>
      {Object.entries(restPlayer).map((v) => (
        <TableItem key={v[0]}>{v[1]}</TableItem>
      ))}
    </TableRow>
  );
};

interface TableHeadersProps {
  /** function which is exuted when header is clicked */
  onHeaderClick: (key: SortableKey) => void;
}

interface Header {
  /** Key used to identify field */
  key: SortableKey;
  /** Name displayed to the user in the table header*/
  displayName: string;
}

const TableHeaders = ({ onHeaderClick }: TableHeadersProps): JSX.Element => {
  const headers: Header[] = [
    { key: 'firstName', displayName: 'Firstname' },
    { key: 'lastName', displayName: 'Lastname' },
    { key: 'position', displayName: 'Position' },
    { key: 'squadNumber', displayName: 'Number' },
  ];

  return (
    <TableHeader>
      {headers.map((v: Header) => (
        <HeaderItem onClick={() => onHeaderClick(v.key)} key={v.key}>
          {v.displayName}
        </HeaderItem>
      ))}
    </TableHeader>
  );
};

interface PlayerTableProps {
  /** List of players to show in table */
  players: PlayerSummary[];
  /** function executed when a player is clicked on */
  onPlayerSelect(id: ID<Player>): void;
}

/** Component renders a table of player details*/
const PlayerTable = (props: PlayerTableProps): JSX.Element => {
  const { players, onPlayerSelect } = props;

  const { sortedPlayers, sortHandler } = usePlayerSort(players);

  return (
    <Table>
      <TableHeaders onHeaderClick={sortHandler} />
      {sortedPlayers.map((v) => (
        <Row key={v.id} onClick={() => onPlayerSelect(v.id)} player={v} />
      ))}
    </Table>
  );
};

export default PlayerTable;
