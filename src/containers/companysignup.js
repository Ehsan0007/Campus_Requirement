import { connect } from 'react-redux';
import CompanaySignup from '../components/companysignup/companysignup';
import { loadInitialState } from '../store/actions/loadInitialState';
import { CompanySignUpRequest } from '../store/actions/companysignup';


function mapStateToProps(state) {
  
  return {
    application: state.application
  };
}

function mapDispatchToProps(dispatch) {
  
  return {
    loadInitialState    : () => dispatch(loadInitialState()),
    companysignUpRequest       : (data) => dispatch(CompanySignUpRequest(data))
  };
}

const CompanySignUpContainer = connect(mapStateToProps, mapDispatchToProps)(CompanaySignup);

export default CompanySignUpContainer;