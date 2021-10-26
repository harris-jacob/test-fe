import styled from "styled-components";
import Card from '../components/Card';
import { Player } from "../interfaces/player";
import theme from "../theme";
import { Team } from "../interfaces/team";
import H6 from "./H6";

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

const TeamHeading = styled(H6)`
    padding: ${theme.spacing(2)};
    text-transform: uppercase;
`



const makeRow = (player: Player): JSX.Element => {
    const {__typename, id, ...restPlayer} = player;

   return <TableRow key={id}>{Object.entries(restPlayer).map((v) => <TableItem key={v[0]}>{v[1]}</TableItem>)}</TableRow> 
}

const TableHeaders = (): JSX.Element => {
    const headers = ["Firstname", "Lastname", "Position", "Number"]

    return <TableRow>{headers.map((v: string) => <TableHeader>{v}</TableHeader>)}</TableRow>
}





/** Component that shows player stats of a whole team */
const TeamViewer = ({team}: {team: Team}): JSX.Element => {

    const playerTable = (
        <Card>
            <TeamHeading>{`${team.name} Starting Lineup`}</TeamHeading>
            <Table>
                <TableHeaders/>
                {team.firstEleven.map((v: Player) => makeRow(v))}
            </Table>
        </Card>
    )


    return (
        <div>
            {playerTable}
        </div>
    )
}

export default TeamViewer;