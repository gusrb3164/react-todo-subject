import React, { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Filter from './Filter';
import { debounce } from "lodash";



const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-left: 5px;
    padding-right: 5px;
    margin-left:40px;
    margin-right:40px;
    border-bottom: 1px solid #dee2e6;

    h1 {
        display: inline-block;
    }

    #inputcolor {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: transparent;
        width: 34px;
        height: 35px;
        border: none;
        cursor: pointer;
    }

    #inputcolor::-webkit-color-swatch {
        border-radius: 50%;
        border: 3px solid #dee2e6;
    }
    
    
    #inputcolor::-moz-color-swatch {
        border-radius: 50%;
        border: 3px solid #dee2e6;
    }

    
`;

const HeaderLeft = styled.div`
    display: flex;
`;



function Header({ checkStatus, onFilter } ) {
    const [colors, setColors] = useState(() => window.localStorage.getItem("color") || "#ffffff");

    const debounceColor = debounce(() => {
        window.localStorage.setItem("color", colors);
    }, 500);
    
    const onChange = e => {
        setColors(e.target.value);
        debounceColor(); 
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
                <HeaderLeft>
                    <input 
                        id='inputcolor'
                        type='color' 
                        value={colors}
                        onChange={onChange}
                    />
                    <Filter checkStatus={checkStatus} onFilter={onFilter}/>
                </HeaderLeft>
                
            </HeaderBox>
        </>
        
    )
};

export default Header;