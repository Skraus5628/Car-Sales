import React from 'react';
import { connect } from 'react-redux';

import { buyItem } from '../actions';

import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {

  const addFeaturehandler = e => {
    e.preventDefault()
    buyItem(props.feature);
  }

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeaturehandler={addFeaturehandler}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(
  mapStateToProps, {buyItem}
)(AdditionalFeatures);
