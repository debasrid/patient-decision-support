import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as patientActions from '../../actions/patient';
import { Patient } from '../../components/Patient'

class Home extends Component {
  componentWillMount() {
    this.props.actions.listCompletePatientData()
  }

  render() {
    const {patients} = this.props;   
    return (
      <div className="home mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">Patient Decision Support</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-10" />
          <div className="col-1">
            <button
              type="button"
              className="small"
              onClick={() => {
                this.props.actions.listCompletePatientData()
              }}
            >
              Compleet
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="small"
              onClick={() => {
                this.props.actions.listRecentPatientData()
              }}
            >
              Recent
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Patient patientData={patients} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    patients: state.patient.patients
  }),
  dispatch => ({
    actions: bindActionCreators(patientActions, dispatch)
  })
)(Home)
