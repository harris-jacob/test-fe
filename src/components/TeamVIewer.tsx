import styled from "styled-components";
import Card from '../components/Card';
import { Player } from "../interfaces/player";
import theme from "../theme";
import { Team } from "../interfaces/team";

const Table = styled.table`
    text-align: left;
    border-collapse: collapse;
    width: 100%;
`

const TableRow = styled.tr`
`

const TableItem = styled.td`
    border-bottom: 1px solid #ddd;
    padding: ${theme.spacing(3)};
`
const TableHeader = styled.th`
    ${theme.typography.h6}
    border-bottom: 1px solid #ddd;
    padding: ${theme.spacing(3)};
`

const makeRow = (player: Player): JSX.Element => {
    const {__typename, ...restPlayer} = player;

   return <TableRow>{Object.values(restPlayer).map((v: string) => <TableItem>{v}</TableItem>)}</TableRow> 
}

const TableHeaders = (): JSX.Element => {
    const headers = ["Firstname", "Lastname", "Position", "Number"]

    return <TableRow>{headers.map((v: string) => <TableHeader>{v}</TableHeader>)}</TableRow>
}


/** Component that shows player stats of a whole team */
const TeamViewer = ({team}: {team: Team}): JSX.Element => {
    return (
    <Card>
        <Table>
            <TableHeaders/>
            {team.firstEleven.map((v: Player) => makeRow(v))}
        </Table>
    </Card>
    )
}

export default TeamViewer;