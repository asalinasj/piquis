import React from 'react';
import ResultsV from './ResultsV';

class Results extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          results: [],
        };
    }

    getDishResults = (dishName) => {
      fetch(`https://piquis-api-dot-piquis-220920.appspot.com/api/dish/${dishName}`)
        .then((response) => response.json())
        .then((jsonResponse) => {
          console.log(`results component: ${jsonResponse}`);
          this.setState({ results: jsonResponse });
        })
        .catch((error) => console.log(`my error: ${error}`));
    }

    componentDidMount = () => {
      this.getDishResults(this.props.navigation.state.params.term);
    }

    render(){
        return (
            <ResultsV results={this.state.results} />
        );
    }
}

export default Results;
