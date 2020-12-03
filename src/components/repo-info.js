import React, { Component} from "react";
import styled from 'styled-components';

const repos = [
    'eslint/eslint',
    'oakwood/front-end-questions',
    'babel/babel',
    'webpack/webpack',
    'storybooks/storybook',
    'facebook/react',
    'reactjs/redux',
    'expressjs/express'
  ];

class RepoInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
          count: 0
        }
    }
    render(){
        return (
                <div>
                    <h2>Info</h2>
                    <p>{this.props.count}</p>
                </div>
        )
    }
}

export default RepoInfo;