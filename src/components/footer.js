import React from "react";
import styled from 'styled-components';

function Footer(props) {
    return(
        <Container>
            <Text>Site made by Omi Gibba in December 2020</Text>
        </Container>
    );
}

const Container = styled.div`
    background-color: #24292e;
    padding: 1rem;
`;

const Text = styled.p`
    color: #fff;
    text-align: center;
`;

export default Footer;