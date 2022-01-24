import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 4rem;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  div {
    height: 100%;
    display: flex;
    align-items: center;
    .modalButton {
      padding: 0;
      border: none;
      background: none;
      cursor: pointer;
    }
  }
`;