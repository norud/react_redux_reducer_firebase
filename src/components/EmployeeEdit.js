import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';
import {View} from 'react-native';
import {Card, CardSection, Button, Confirm} from './common';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
  state = {showModal: false};

  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({prop, value});
    });
  }

  onButtonPress() {
    const {name, phone, shift} = this.props;
    this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
  }

  onTextPress() {
    const {phone, shift} = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onDecline() {
    this.setState({showModal: false});
  }
  onAccept() {
    const {uid} = this.props.employee;
    this.props.employeeDelete({uid});
  }
  render() {
    return (
      <View>
        <EmployeeForm />
        <Card>
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Save Changes
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
          </CardSection>

          <CardSection>
            <Button
              onPress={() => this.setState({showModal: !this.state.showModal})}>
              Fire Employe
            </Button>
          </CardSection>
          <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}>
            Are you sure you want to delete this?
          </Confirm>
        </Card>
      </View>
    );
  }
}

const mapStaettoprops = state => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};

export default connect(mapStaettoprops, {
  employeeUpdate,
  employeeSave,
  employeeDelete,
})(EmployeeEdit);
