/** Full detailed representation of Player from database */
export interface Player {
  id: string;
  __typename: 'Player';
  firstname: string;
  lastname: string;
  position: Position;
  squadNumber: number;
  nationality: string;
  height: number;
}

/** Condensed player representation for populating player table */
export type PlayerSummary = Omit<Player, 'nationality' | 'height'>;

export type Position = 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Striker';
