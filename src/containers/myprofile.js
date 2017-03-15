import { connect } from 'react-redux';
import Myprofile from '../components/profile/myprofile';
import { loadInitialState } from '../store/actions/loadInitialState';
import { ProfileRequest } from '../store/actions/ProfileRequest';
// import firebase from 'firebase'



function mapStateToProps(state) {
  
  return {
    application: state.application
  };
}

function mapDispatchToProps(dispatch) {
  
  return {
    loadInitialState    : () => dispatch(loadInitialState()),
    profileRequest       : (data) => dispatch(ProfileRequest(data))
  };
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Myprofile);

export default ProfileContainer;