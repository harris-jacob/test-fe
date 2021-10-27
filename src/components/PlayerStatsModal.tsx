import React from 'react';
import { ID } from '../interfaces/generic';
import { Player } from '../interfaces/player';
import { usePlayer } from '../hooks/usePlayer';
import Modal from './generic/Modal';
import H5 from './generic/H5';
import Button from './generic/Button';
import styled from 'styled-components';
import theme from '../theme';

interface Props {
  /** ID of the player whos stats to fetch */
  id: ID<Player>;
  /** When close button is clicked */
  onClose: () => void;
}

const CloseButton = styled(Button)`
  align-self: end;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const ModalControls = styled.div`
  position: relative;
  flex-grow: 1;
`;

const StatsContainer = styled.div`
  ${theme.typography.h6}
  line-height: 2;
  align-self: center;
  padding-top: ${theme.spacing(6)};
`;
const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StatsDisplay = ({ player }: { player: Player }): JSX.Element => (
  <StatsContainer>
    {`Position: ${player.position}`}
    <br />
    {`Nationality: ${player.nationality}`}
    <br />
    {`Squad Number: ${player.squadNumber}`}
    <br />
    {`Height: ${player.height}cm`}
    <br />
  </StatsContainer>
);

const PlayerStatsModal = ({ id, onClose }: Props): JSX.Element => {
  const { player, loading } = usePlayer(id);

  const modalControls = (
    <ModalControls>
      <CloseButton onClick={onClose}>Close</CloseButton>
    </ModalControls>
  );

  const content = (
    <ContentContainer>
      {player && <H5>{`${player.firstname} ${player.lastname}`}</H5>}
      {player && <StatsDisplay player={player} />}
      {modalControls}
    </ContentContainer>
  );

  return (
    <Modal>
      {loading && <div>Loading...</div>}
      {content}
    </Modal>
  );
};

export default PlayerStatsModal;
