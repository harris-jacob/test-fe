import styled from 'styled-components';
import theme from '../../theme';
import { PlayerSortKey } from '../../hooks/usePlayerSort';

interface TableHeadersProps {
  /** function which is exuted when header is clicked */
  onHeaderClick: (key: PlayerSortKey) => void;
}

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

interface Header {
  /** Key used to identify field */
  key: PlayerSortKey;
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

export default TableHeaders;
