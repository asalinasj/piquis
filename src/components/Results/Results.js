import React from 'react';
import ResultsV from './ResultsV';

class Results extends React.Component{
    constructor(props){
        super(props)
    }
    getDishResults = (dishName) => {
      fetch(`https://piquis-api-dot-piquis-220920.appspot.com/api/dish/${dishName}`)
        .then((response) => response.json())
        .then((jsonResponse) => {
          console.log(jsonResponse);
          return jsonResponse;
        })
        .catch((error) => console.log(`my error: ${error}`));
    }
    render(){
        return(
            <ResultsV text={this.getDishResults(this.props.navigation.state.params.term)}
            />
        );
    }
}

export default Results;
