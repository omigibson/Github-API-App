import React from "react";
import styled from 'styled-components';
import Button from './button';
import { ReactComponent as PlusIcon } from "../icons/plus-icon.svg";
import { ReactComponent as MinusIcon } from "../icons/minus-icon.svg";

function Counter(props) {
    return(
        <div>
            <Button onClick={() => props.onCounterClick()}><MinusIcon /> Decrement</Button>
            <CounterParagraph>Counter: {props.count}</CounterParagraph>
            <Button primary onClick={() => props.onCounterClick('increment')}><PlusIcon /> Increment</Button>
        </div>
    );
}

const CounterParagraph = styled.p`
    display: inline-block;
    font-size: 19px;
    padding: 0 1.5rem;
`;

export default Counter;