import React from 'react';
import RatingsV from './RatingsV';
import StarRating from 'react-native-star-rating';

class Ratings extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            starCount: 3.5
        };
    }
    onStarRating = (rating) => {
        this.setState({
            starCount: rating
        });
    }

    render(){
        return(
            <RatingsV rating = {this.state.starCount}/>
        );
    }
}

export default Ratings;