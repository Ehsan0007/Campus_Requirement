import { connect } from 'react-redux';
import ViewReport from '../components/report/viewReport';
import { loadInitialState } from '../store/actions/loadInitialState';
import { childAddedHandler } from '../store/actions/childAddedHandler';
// import { loadCrimesRequest } from '../store/actions/ViewReport';
import { viewAllCrimesRequest } from '../store/actions/viewReport';

function mapStateToProps(state) {
  //here we are mapping the redux state to props so we can use it in our components
  return {
    application: state.application
  };
}

function mapDispatchToProps(dispatch) {
  childAddedHandler(dispatch);
  //Those will be the actions we will be Triggerening from Components
  return {
    loadInitialState    : () => dispatch(loadInitialState()),
    loadAllCrimesRequest   : () => dispatch(viewAllCrimesRequest()),
    // updateReport : (data) => dispatch(updateReportRequest(data))
  };
}

const ViewAllCrimesContainer = connect(mapStateToProps, mapDispatchToProps)(ViewReport);

export default ViewAllCrimesContainer;