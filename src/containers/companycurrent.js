import { connect } from 'react-redux';
import CompanyselfProfile from '../components/companyprofile/company';
import { loadInitialState } from '../store/actions/loadInitialState';
import {viewCompanyRequest} from '../store/actions/profilecompany'


function mapStateToProps(state) {

  return {
    application: state.application
  };
}

function mapDispatchToProps(dispatch) {  
  return {
    loadInitialState    : () => dispatch(loadInitialState()),
    companyprofileRequest   : () => dispatch(viewCompanyRequest()),
    
  };
}

const ViewAllCompany = connect(mapStateToProps, mapDispatchToProps)(CompanyselfProfile);

export default ViewAllCompany;