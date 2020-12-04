import React from "react";
import styled from 'styled-components';
import Button from './button';
import { ReactComponent as PlusIcon } from "../icons/plus-icon.svg";
import { ReactComponent as MinusIcon } from "../icons/minus-icon.svg";

function Counter(props) {
    return(
        <CounterContainer>
            <Button onClick={() => props.onCounterClick()}><MinusIcon /> Decrement</Button>
            <CounterParagraph>Counter: {props.count}</CounterParagraph>
            <Button primary onClick={() => props.onCounterClick('increment')}><PlusIcon /> Increment</Button>
        </CounterContainer>
    );
}

const CounterContainer = styled.div`
    padding: 1rem;
`;

const CounterParagraph = styled.p`
    display: inline-block;
    width: 100px;
    font-size: 19px;
    padding: 0 1.2rem;
`;

export default Counter;