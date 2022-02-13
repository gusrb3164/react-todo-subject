import styled from 'styled-components';
import { THEME_GRAY } from '../../utils/GlobalStyle';

export const FooterContainer = styled.footer`
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-size: 1rem;
    color: ${THEME_GRAY};
    text-decoration: none;
  }
`;