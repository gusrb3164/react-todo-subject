import React from 'react';
import styled from 'styled-components';

const TemplateBox = styled.div`
    position: relative;
    width: 500px;
    height: 600px;

    background-color: white;
    border-radius: 25px;
    border: 1px solid #dee2e6;
    margin: 0 auto;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);

    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    
`;

function Template({ children }){
    return <TemplateBox>{children}</TemplateBox>;
}

export default Template;