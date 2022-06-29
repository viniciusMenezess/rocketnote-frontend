import styled from "styled-components";

export const Container = styled.button`
  width:100%;
  background-color: ${({theme}) => theme.COLORS.ORANGE};
  color: ${({theme}) => theme.COLORS.BACKGROUND_800};

  display:flex;
  align-items:center;
  justify-content:center;

  height: 56px;
  border:0;
  padding:0 16px;
  margin-top:16px;
  border-radius:10px;
  font-weight:500;
  margin-bottom:16px;

  &:disabled {
    opacity: 0.5;
  }

  > svg {
    margin-right:8px;
  }
`