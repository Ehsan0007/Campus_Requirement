import { connect } from 'react-redux';
import Viewjob from '../components/profile/viewjob';
import { loadInitialState } from '../store/actions/loadInitialState';
import {viewAllJObsRequest} from '../store/actions/viewjob'


function mapStateToProps(state) {

  return {
    application: state.application
  };
}

function mapDispatchToProps(dispatch) {  
  return {
    loadInitialState    : () => dispatch(loadInitialState()),
   loadAllCompanyRequest   : () => dispatch(viewAllJObsRequest()),
    
  };
}

const ViewAllJOBS = connect(mapStateToProps, mapDispatchToProps)(Viewjob);

export default ViewAllJOBS;