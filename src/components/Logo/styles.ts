import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 3rem;
    font-weight: 900;
    margin-right: 0.25rem;
  }
  div {
    margin-right: 0.25rem;
    margin-bottom: 0.375rem;
    position: relative;
    display: inline-block;
    button {
      width: 2.25rem;
      height: 2.25rem;
      border: none;
      border-radius: 50%;
      background: 
        linear-gradient(217deg, rgba(247,201,120,.8), rgba(247,201,120,0) 70.71%),
        linear-gradient(127deg, rgba(166,192,254,.8), rgba(166,192,254,0) 70.71%),
        linear-gradient(336deg, rgba(246,139,125,.8), rgba(246,139,125,0) 70.71%);
      cursor: pointer;
    }
    input {
      position: absolute;
      left: 0;
      top: 25%;
      width: 2.25rem;
      height: 2.25rem;
      width: 100%;
      opacity: 0;
    }
  }
`;