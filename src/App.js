import React, { Component} from "react";
import styled from 'styled-components';
import { Counter, RepoInfo, Footer } from "./components";

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      repos: [
        'eslint/eslint',
        'oakwood/front-end-questions',
        'babel/babel',
        'webpack/webpack',
        'storybooks/storybook',
        'facebook/react',
        'reactjs/redux',
        'expressjs/express'
      ],
      repoInfo: {}
    }
}

// METHODS

// Show info on the first repo on page load
componentDidMount(){
  this.getRepoInfo()
}

// Change count in state on button click. Then fetch info on selected repo
  onCounterClick = (isIncrement = false) => {
    if (isIncrement){
      this.setState({
          count: this.state.count + 1
      }, this.getRepoInfo);
    }
    else {
        this.setState({
            count: this.state.count - 1
        }, this.getRepoInfo);
    }
  }


  // Call Github API and fetch repo data
  getRepoInfo = () => {
    fetch('https://api.github.com/repos/' + this.state.repos[this.state.count])
      .then(res => res.json())
      .then((data) => {
        this.setState({ repoInfo: data })
      })
      .catch((error) => {
        this.setState({ 
          repoInfo: {
            error: error
          }
        })
      })
  }

  // OUTPUT
  render(){
    return(
      <>
        <OuterAppWrapper>
          <InnerAppWrapper>
            <h1>My favorite Github repos</h1>
            <RepoList>
              {this.state.repos.map((repo, index) => <li>{index}. {repo}</li>)}
            </RepoList>
            <Counter count={this.state.count} onCounterClick={this.onCounterClick} /> 
            <RepoInfo repo={this.state.repoInfo} />
          </InnerAppWrapper>
        </OuterAppWrapper>
        <Footer />
      </>
    );
  }
}


// STYLES
const OuterAppWrapper = styled.div`
  background-color: #f6f8fa;
  color: #24292e;
  text-align: center;
  padding: 2rem 3rem 4rem;
`;

const InnerAppWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const RepoList = styled.ul`
  max-width: 750px;
  list-style: none;
  padding: 1rem;
  margin: 0 auto;
  li {
    display: inline-block;
    padding-right: 1rem;
  }
`;

export default App;