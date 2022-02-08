import styled from 'styled-components';

export const MainLayoutContainer = styled.div<{ bgColor: string }>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`;

export const ContentsContainer = styled.main`
  padding: 0 1rem;
  margin-bottom: auto;
  section {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    h2 {
      margin-bottom: 1.25rem;
      font-size: 1.125rem;
      color: #696969;
    }
  }
`;