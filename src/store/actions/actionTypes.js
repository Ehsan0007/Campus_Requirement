const actionTypes = {
  LoadInitialState: 'LoadInitialState',

  LoginRequest: 'LoginRequest',
  LoginRequestFailed: 'LoginRequestFailed',
  LoginRequestSuccess: 'LoginRequestSuccess',

  loadUserRequest: 'loadUserRequest',
  loadUserRequestFailed: 'loadUserRequestFailed',
  loadUserRequestSuccess: 'loadUserRequestSuccess',

  SignUpRequest: 'SignUpRequest',
  SignUpRequestFailed: 'SignUpRequestFailed',
  SignUpRequestSuccess: 'SignUpRequestSuccess',

  logOutRequest: 'logOutRequest',
  logOutRequestFailed: 'logOutRequestFailed',
  logOutRequestSuccess: 'logOutRequestSuccess',

  addedReportRequestSuccess: 'addedReportRequestSuccess',

  addReportRequest: 'addReportRequest',
  addReportRequestFailed: 'addReportRequestFailed',
  addReportRequestSuccess: 'addReportRequestSuccess',

  CompanySignUpRequest : 'CompanySignUpRequest',
  CompanySignUpRequestSuccess : 'CompanySignUpRequestSuccess',
  CompanySignUpRequestFailed : 'CompanySignUpRequestFailed',
  
  CreatejobRequest :  'CreatejobRequest',
  CreatejobRequestSuccess : 'CreatejobRequestSuccess',
  CreatejobRequestFailed : 'CreatejobRequestFailed',

  loadCompanyDataRequest : 'loadCompanyDataRequest',
  loadCompanayRequestSuccess : 'loadCompanayRequestSuccess',
  loadCompanayRequestFailed : 'loadCompanayRequestFailed',
  
  LoadCurrent : 'LoadCurrent',
  loadCurrentUserSuccess : 'loadCurrentUserSuccess',
  
  LoadCurrentCompany : 'LoadCurrentCompany',
  loadCurrentCompanySuccess : 'loadCurrentCompanySuccess',

  LoadStudentData : 'LoadStudentData',
  loadStudentRequestSuccess : 'loadStudentRequestSuccess',

  // logOutRequest : 'logOutRequest',
  // logOutRequestSuccess : 'logOutRequestSuccess',
};

export default actionTypes;