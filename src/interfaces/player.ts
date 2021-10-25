export interface Player {
    firstname: string;
    lastname: string;
    position: Position;
    squadNumber: number;
    __typename: 'Player';
  }

export type Position = 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Striker';

