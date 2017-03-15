import { connect } from 'react-redux';
import Admin from '../components/Admin/admin';
import { loadInitialState } from '../store/actions/loadInitialState';
import {LoadAdminRequest} from '../store/actions/admin'


function mapStateToProps(state) {

  return {
    application: state.application
  };
}

function mapDispatchToProps(dispatch) {  
  return {
    loadInitialState    : () => dispatch(loadInitialState()),
    adminRequest   : (data) => dispatch(LoadAdminRequest(data)),
    
  };
}

const ViewAdmin = connect(mapStateToProps, mapDispatchToProps)(Admin);

export default ViewAdmin;