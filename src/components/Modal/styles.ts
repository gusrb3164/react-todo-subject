import styled from 'styled-components';
import { THEME_RED, THEME_LIGHT_GRAY, THEME_GRAY } from '../../utils/GlobalStyle';

export const FilterModalContainer = styled.dialog<{ bgColor: string }>`
  top: 4rem;
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background-color: ${props => props.bgColor};
  box-shadow: 0px 8px 4px 2px rgba(0, 0, 0, 0.2);
  button:not(:last-child) {
    width: 100%;
    margin-bottom: 0.75rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: none;
    border: none;
    p {
      margin-left: 0.5rem;
      font-size: 1.125rem;
    }
  }
  button:last-child {
    margin: 1rem;
    font-size: 1.5rem;
    color: ${THEME_RED};
    background: none;
    border: none;
  }
`;

export const AddModalContainer = styled.dialog<{ bgColor: string }>`
  top: 4rem;
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background-color: ${props => props.bgColor};
  box-shadow: 0px 8px 4px 2px rgba(0, 0, 0, 0.2);
  input {
    padding-bottom: 0.5rem;
    width: 80%;
    border: none;
    border-bottom: 1px solid black;
    background-color: ${props => props.bgColor};
    font-size: 1rem;
  }
  input::placeholder {
    color: ${THEME_LIGHT_GRAY};
  }
  input:focus {
    outline: none;
  }
  ol {
    margin-top: 1rem;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    li {
      button {
        width: 5rem;
        height: 2rem;
        background-color: ${props => props.bgColor};
        border: 2px solid;
        border-radius: 0.75rem;
        font-size: 1rem;
        color: ${THEME_GRAY};
      }
    }
  }
  button {
    margin: 1rem 0;
    background-color: ${props => props.bgColor};
    border: none;
    font-size: 1.5rem;
    color: ${THEME_RED};
  }
`;