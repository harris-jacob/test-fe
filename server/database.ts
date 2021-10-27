import casual from 'casual';
import random_name from 'node-random-name';
import { getRandomDate } from 'random-date-generator';

type Position = 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Striker';

interface InternalPlayer {
  id: string;
  firstname: string;
  lastname: string;
  height: string;
  dateOfBirth: string;
  squadNumber: number;
  nationality: string;
  position: Position;
}

interface InternalTeam {
  name: string;
  stadium: string;
  firstEleven: InternalPlayer[];
}

interface InternalMatch {
  date: string;
  home: InternalTeam;
  away: InternalTeam;
}

const positions: Position[] = [
  'Goalkeeper',
  'Defender',
  'Midfielder',
  'Striker',
];

const startDOBDate = new Date();
const endDOBDate = new Date(startDOBDate);
startDOBDate.setFullYear(startDOBDate.getFullYear() - 35);
endDOBDate.setFullYear(endDOBDate.getFullYear() - 18);

const generatePlayer = (): InternalPlayer => {
  const dateOfBirth = getRandomDate(startDOBDate, endDOBDate).toUTCString();
  const squadNumber = casual.integer(1, 25);
  const nationality = casual.country;
  const seed = `${dateOfBirth}:${squadNumber}:${nationality}`;
  return {
    id: casual.uuid,
    firstname: random_name({ gender: 'male', first: true, seed }),
    lastname: random_name({ last: true, seed }),
    height: 150 + (Math.random() * 50).toFixed(2),
    dateOfBirth,
    squadNumber,
    nationality,
    position: positions[Math.floor(Math.random() * 4)],
  };
};

const generateTeam = (): InternalTeam => ({
  name: casual.company_name,
  stadium: casual.city,
  firstEleven: [...new Array(11)].map(() => generatePlayer()),
});

const generateMatch = (): InternalMatch => ({
  date: new Date().toUTCString(),
  home: generateTeam(),
  away: generateTeam(),
});

// persist match for life of server
let db: InternalMatch = generateMatch();

/** return match from db */
export const getMatch = (): InternalMatch => {
  // generate new match on next match request
  db = generateMatch();
  return db;
};

/** Fetch all players in the database */
export const getPlayers = (): InternalPlayer[] => {
  return [...db.home.firstEleven, ...db.away.firstEleven];
};
