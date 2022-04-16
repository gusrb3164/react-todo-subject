import styled from 'styled-components';
import { THEME_GRAY, THEME_DARK_GRAY, THEME_LIGHT_BLACK } from '../../utils/GlobalStyle';

export const LabelListContainer = styled.ol`
  display: flex;
  flex-direction: row;
`;

export const LabelListItemContainer = styled.li<{ color: string }>`
  width: 5rem;
  height: 1.75rem;
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-color: ${props => props.color};
  opacity: 0.5;
  font-size: 1rem;
  color: ${THEME_LIGHT_BLACK};
`;

export const TodoListContainer = styled.ol`
  width: 100%;
`;

export const TodoListItemContainer = styled.li<{ completed: boolean, bgColor: string }>`
  margin-bottom: 1.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    flex-direction: row;
    > button {
      padding: 0;
      border: none;
      background-color: ${(props) => props.bgColor};
    }
    > div {
      margin-left: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      > h3 {
        max-width: 60vw;
        font-size: 1.125rem;
        color: ${THEME_DARK_GRAY};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-decoration: ${(props) => props.completed ? 'line-through' : 'none'}
      }
      > p {
        font-size: 0.875rem;
        color: ${THEME_GRAY};
      }
    }
  }
  > button {
    border: none;
    background-color: ${(props) => props.bgColor};
  }
`;