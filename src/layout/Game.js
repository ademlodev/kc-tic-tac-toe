import React, { Fragment } from 'react';
import { Box, Button } from 'rebass';
import styled from 'styled-components';
import { Board } from '../components';

const Game = () => (
  <Box mx={10} my={10}>
    <Board />
  </Box>
);

export default Game;
