import { connect } from 'react-redux';
import CompanyselfProfile from '../components/profile/company';
import { loadInitialState } from '../store/actions/loadInitialState';
import {viewAllCompanyRequest} from '../store/actions/company'


function mapStateToProps(state) {

  return {
    application: state.application
  };
}

function mapDispatchToProps(dispatch) {  
  return {
    loadInitialState    : () => dispatch(loadInitialState()),
    loadAllCompanyRequest   : () => dispatch(viewAllCompanyRequest()),
    
  };
}

const ViewAllCompanyContainer = connect(mapStateToProps, mapDispatchToProps)(CompanyselfProfile);

export default ViewAllCompanyContainer;