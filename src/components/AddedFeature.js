import React from 'react';
// import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';

import {removeFeature} from '../Actions/carActions';

const AddedFeature = props => {
        const dispatch = useDispatch();

    const handleRemoveFeature = () =>{
      dispatch(removeFeature(props.feature));
    }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleRemoveFeature}>X</button>
      {props.feature.name}
    </li>
  );
};


export default AddedFeature;


// refactored code:

// const removeFeature = () =>{
    //   console.log('feature removed: ' + props.feature.name);
    //   props.removeFeature(props.feature);
    // }


// export default connect(null, {removeFeature})(AddedFeature);

