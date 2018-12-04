import React from 'react';
import ResultsV from './ResultsV';

class Results extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            term: '',
            results: [],
        }
    }
    sendData = (data) => {
        this.setState({term: data});
        //this.props.navigation.state.params.term = data;
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
    pressSearch = () => {
        if(this.state.term != "default"){
          this.props.navigation.navigate('Results', {term: this.state.term});
          console.log(this.state.term);
        }
        else {
          console.log("Null value");
          this.props.navigation.navigate('Home');
        }
       
    }
    render(){
        return(
            <ResultsV 
                text={this.props.navigation.state.params.term}
                search={this.pressSearch}
                searchText={this.sendData}
                results={this.state.results}
            />
        );
    }
}

export default Results;
