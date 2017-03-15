import { connect } from 'react-redux';
import StudentList from '../components/companyprofile/student';
import { loadInitialState } from '../store/actions/loadInitialState';
import {viewAllStudentRequest} from '../store/actions/studentlist'


function mapStateToProps(state) {

  return {
    application: state.application
  };
}

function mapDispatchToProps(dispatch) {  
  return {
    loadInitialState    : () => dispatch(loadInitialState()),
    laodAllStudentList   : () => dispatch(viewAllStudentRequest()),
    
  };
}

const ViewAllStudentContainer = connect(mapStateToProps, mapDispatchToProps)(StudentList);

export default ViewAllStudentContainer;