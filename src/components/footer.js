import React from "react";
import styled from 'styled-components';

// OUTPUT
function Footer() {
    return(
        <Container>
            <Text>Site made by Omi Gibba in December 2020</Text>
        </Container>
    );
}

// STYLES
const Container = styled.div`
    background-color: #24292e;
    padding: 1rem;
`;

const Text = styled.p`
    color: #fff;
    text-align: center;
`;

export default Footer;