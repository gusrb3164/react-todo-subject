import React, { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-left: 5px;
    padding-right: 5px;
    margin-left:40px;
    margin-right:40px;
    border-bottom: 1px solid lightgray;

    h1 {
        display: inline-block;
    }

    input {
        
    }
    
`;

function Header() {
    const [colors, setColors] = useState('#ffffff');
    const onChange = e => {
        setColors(color => e.target.value)
    };
    const GlobalStyle = createGlobalStyle`
    body {
        background: ${colors};
    }
    `;
    return(
        <>
            <GlobalStyle/>
            <HeaderBox>
                <h1>TODO</h1>
                <div>
                    <input 
                        type='color' 
                        value={colors}
                        onChange={onChange}
                    />

                </div>
                
            </HeaderBox>
        </>
        
    )
};

export default Header;