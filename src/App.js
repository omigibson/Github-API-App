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

componentDidMount(){
  this.getRepoInfo()
}

  onCounterClick = (isIncrement = false) => {
    // If increment button was clicked, increase counter. Otherwise decrease counter
    if (isIncrement){
      console.log('increase')
      this.setState({
          count: this.state.count + 1
      }, this.getRepoInfo);
    }
    else {
      console.log('decrease')
        this.setState({
            count: this.state.count - 1
        }, this.getRepoInfo);
    }
  }

  getRepoInfo = () => {
    console.log('Get repos')
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