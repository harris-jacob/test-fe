import React from 'react';
import styled from 'styled-components';
import { Player, PlayerSummary } from '../../interfaces/player';
import { usePlayerSort } from '../../hooks/usePlayerSort';
import Card from '../generic/Card';
import TableHeaders from './TableHeaders';
import theme from '../../theme';
import { ID } from '../../interfaces/generic';

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
