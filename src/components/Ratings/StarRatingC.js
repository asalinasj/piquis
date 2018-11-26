import React from 'react';
import StarRating from 'react-native-star-rating';

class StarRatingC extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            starCount: 3.5
        };
    }
    //trying to update state when pressing new rating
    /*componentDidUpdate = (prevState) => {
        if(this.state.starCount !== prevState.starCount){
            this.fetchData(this.state.starCount);
        }
    }*/
    onPressStarRating = (rating) => {
        this.setState({
            starCount: rating
        });
    }

    render(){
        return(
            <StarRating
                disabled={false}
                maxStar={5}
                rating={this.state.starCount}
                selectedStar={(rating) => this.onPressStarRating(rating)}
                fullStarColor={'gold'}
            />
        );
    }
}

export default StarRatingC;