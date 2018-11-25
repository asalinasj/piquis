import React from 'react';
import { Rating } from 'react-native-elements';

const RatingsV = (props) => {
    return(
        <Rating 
            
            type="star"
            fractions={1}
            startingValue={3.6}
            imageSize={25}
            style={{paddingVertical: 10}}
        />
    );
}

export default RatingsV;