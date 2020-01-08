import React from 'react';
// import {connect} from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
  
  return (
    <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures/>
        <Total/>
      </div>
      <div className="box">
        <AdditionalFeatures/>
      
      </div>
    </div>
  );
};

export default App;


// Refactored code:

// const removeFeature = item => {
  //   // dispatch an action here to remove an item
  // };

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  // };


  
// const mapStateToProps  = state => {
//   return{
//     car: state.car,
//     additionalFeatures: state.additionalFeatures,
//     additionalPrice: state.additionalPrice
//   }
// }

// export default connect(mapStateToProps, {})(App);
