import React from 'react';
import styled from 'styled-components';
import Card from './generic/Card';
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

/** Component renders a table of player details*/
const PlayerTable = ({ players }: { players: Player[] }): JSX.Element => {
  const [sortKey, setSortKey] = React.useState<SortableKey>('lastName');
  const [isDescending, setIsDescending] = React.useState<boolean>(false);

  // Function to update sort logic when the header is clicked
  const handleHeaderClick = (newKey: SortableKey) => {
    // if the key hasn't changed update the sort order
    if (newKey === sortKey) {
      setIsDescending(!isDescending);
    } else {
      // otherwise updated the key and reset the order
      setSortKey(newKey);
      setIsDescending(false);
    }
  };

  return (
    <Table>
      <TableHeaders onHeaderClick={handleHeaderClick} />
      {sortPlayers(players, sortKey, isDescending).map((v) => makeRow(v))}
    </Table>
  );
};

export default PlayerTable;
