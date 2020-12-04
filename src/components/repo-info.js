import React, { Component} from "react";
import styled from 'styled-components';

// OUTPUT. Conditional rendering on line 9 and 20.
function RepoInfo (props) {
    const repoName = props.repo.full_name ? props.repo.full_name : props.repo.message;
    return (
        <Info>
            { props.repo.full_name ? 
            <>
                <h2>{props.repo.full_name}</h2>
                <Description>{props.repo.description}</Description>
                <p>Stars: {props.repo.stargazers_count}</p>
            </>
            : <>
                <h2>{props.repo.message}</h2>
                <Link href={props.repo.documentation_url} target="_blank" rel="noopener noreferrer">{props.repo.documentation_url}</Link>
            </>
            }
            { props.repo.error &&
                <>
                    <h2>Something went wrong</h2>
                    <Description>{props.repo.error}</Description>
                </>
            }
        </Info>
    )
}

// STYLES
const Info = styled.div`
    max-width: 500px;
    background-color: white;
    padding: 2rem;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    margin: 1rem auto 0;
`;

const Link = styled.a`
    color: #0366d6;
    font-weight: 600;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const Description = styled.p`
    color: #586069;
`;

export default RepoInfo;