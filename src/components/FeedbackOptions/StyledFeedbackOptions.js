import styled from 'styled-components';

export const StyledFeedback = styled.ul`
  display: flex;
  gap: 20px;
`;

export const StyledButton = styled.button`
  border-radius: 10px;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  color: balck;
  background-color: lavender;
  box-shadow: 2px 2px 4px 4px black;
  &:hover {
    background-color: lightcoral;
  }
  cursor: pointer;
`;
