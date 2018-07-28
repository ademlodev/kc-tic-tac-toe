import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  height: 40px;
  width: 40px;
`;

const StyledButton = styled.button`
  border-radius: 0.5px;
  padding: 0em 0em;
  margin: 0 0em;
  background: transparent;
  color: black;
  border: 1px solid grey;
  height: 100%;
  width: 100%;
`;

class Square extends React.Component {
  render() {
    return (
      <StyledBox>
        <StyledButton onClick={() => this.props.onClick()}>
          {this.props.value}
        </StyledButton>
      </StyledBox>
    );
  }
}

export default Square;
