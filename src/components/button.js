import React from 'react';
import styled from 'styled-components';

function Button (props) {
   return (
      <CounterButton type="button" primary={props.primary} onClick={props.onClick}>{props.children}</CounterButton>
   )
}

const CounterButton = styled.button`
   width: 150px;
   background-color: ${props => (props.primary ? 'hotpink' : 'white')};
   color: ${props => (props.primary ? 'white' : 'black')};
   text-transform: uppercase;
   cursor: pointer;
   padding: 0.5rem;
   border: ${props => (props.primary ? '1px solid hotpink' : '1px solid black')};
   border-radius: 25px;
   transition: all 0.25s;
   svg {
      fill: ${props => (props.primary ? 'white' : 'black')};
      transition: all 0.25s;
   }

   &:hover {
      color: white;
      background-color: ${props => (props.primary ? 'rebeccapurple' : 'black')};
      border: ${props => (props.primary ? '1px solid rebeccapurple' : '1px solid black')};
      svg {
         fill: white;
      }
   }
`;

export default Button;