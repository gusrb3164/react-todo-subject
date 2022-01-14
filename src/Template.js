import React from 'react';
import styled from 'styled-components';

const TodoTemplate = styled.div`
    position: relative;
    width: 500px;
    height: 600px;

    background-color: white;
    border-radius: 25px;
    border: 5px solid lightgray;
    margin: 0 auto;

    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    
`;

function Template({ children }){
    return <TodoTemplate>{children}</TodoTemplate>;
}

export default Template;