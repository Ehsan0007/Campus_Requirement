import { connect } from 'react-redux';
import Createjobs from '../components/companyprofile/createjob';
import { loadInitialState } from '../store/actions/loadInitialState';
import { createjobRequest } from '../store/actions/createjobcontainer';
// import { childAddedHandler } from '../store/actions/childAddedHandler';

function mapStateToProps(state) {
  //here we are mapping the redux state to props so we can use it in our components
  return {
    application: state.application
  };
}


function mapDispatchToProps(dispatch) {
  // childAddedHandler(dispatch);
  return {
    loadInitialState    : () => dispatch(loadInitialState()),
    addNewjob          : (reportData) => dispatch(createjobRequest(reportData))
  };
}

const AddReportContainer = connect(mapStateToProps, mapDispatchToProps)(Createjobs);

export default AddReportContainer;