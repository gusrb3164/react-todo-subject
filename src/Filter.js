import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { AiFillFilter } from 'react-icons/ai';

const FilterIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    margin-left: 10px;
    &:hover{
        color: gray;
    }
    ${props =>
        props.showFilter &&
        css`
            color: gray;
        `}


`;

const FilterBox = styled.div`
    position: fixed;
    padding: 10px;
    width: 120px;
    height: 120px;
    top: 200px;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 10px;
    border: 1px solid #dee2e6;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
    color: gray;
    display: flex;
    flex-direction: column;
`;

const FilterBtn = styled.input`
    margin: 10px;
    font-size: 10px;
    color: gray;
`;

function Filter({ checkStatus, onFilter }){
    const [showFilter, setShowFilter] = useState(false);
    
    const onToggle = () => setShowFilter(!showFilter); 

    return(
        <>
            <FilterIcon showFilter={showFilter} onClick={onToggle}>
                <AiFillFilter/>
            </FilterIcon>
            {showFilter &&
                <FilterBox>
                    <div>
                        <FilterBtn
                            type="radio"
                            id="all"
                            checked={checkStatus === 'all'}
                            onClick={()=>onFilter("all")}
                        >   
                        </FilterBtn>
                        <label htmlFor="all">All</label>
                    </div>
                    <div>
                        <FilterBtn
                            type="radio"
                            id="todo"
                            checked={checkStatus === 'todo'}
                            onClick={()=>onFilter("todo")}
                        />
                        <label htmlFor="todo">Todo</label>

                    </div>
                    <div>
                        <FilterBtn
                            type="radio"
                            id="complete"
                            checked={checkStatus === 'complete'}
                            onClick={()=>onFilter("complete")}
                        />
                        <label htmlFor="complete">Complete</label>

                    </div>
                </FilterBox>
            }
            
        </>
    );
}

export default Filter;
