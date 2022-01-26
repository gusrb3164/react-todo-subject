import styled from 'styled-components';

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
  color: #232323;
`;

export const TodoListContainer = styled.ol`

`;

export const TodoListItemContainer = styled.li<{ completed: boolean }>`
  margin-bottom: 1.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: row;
    div {
      margin-left: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      h3 {
        width: 16rem;
        font-size: 1.125rem;
        color: #444444;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-decoration: ${(props) => props.completed ? 'line-through' : 'none'}
      }
      p {
        font-size: 0.875rem;
        color: #696969;
      }
    }
  }
  button {
    border: none;
    background-color: #FFFFFF;
  }
`;