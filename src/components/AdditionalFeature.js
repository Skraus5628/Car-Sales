import React from 'react';
// import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';

import {addFeature} from '../Actions/carActions';


const AdditionalFeature = props => {
    const dispatch = useDispatch();

    const handleAddFeature = () => {
      dispatch(addFeature(props.feature));
    }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleAddFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default AdditionalFeature;


// Refactored Code: 
// const addFeature = () => {
    //   console.log('feature added ' + props.feature.name)
    //   props.addFeature(props.feature);
    // }

// export default connect(null, {addFeature})(AdditionalFeature);