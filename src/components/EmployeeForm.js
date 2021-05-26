import React, {Component} from 'react';
import {Picker, Text, View} from 'react-native';
import {CardSection, Input} from './common';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Name"
            value={this.props.name}
            onChangeTextInput={text =>
              this.props.employeeUpdate({prop: 'name', value: text})
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="9999-9999"
            value={this.props.phone}
            onChangeTextInput={text =>
              this.props.employeeUpdate({prop: 'phone', value: text})
            }
          />
        </CardSection>
        <CardSection>
          <Text
            style={{
              fontSize: 18,
              paddingLeft: 20,
              marginTop: 14,
              marginRight: 80,
            }}>
            Shift
          </Text>
          <Picker
            style={{flex: 1}}
            selectedValue={this.props.shift}
            onValueChange={day =>
              this.props.employeeUpdate({prop: 'shift', value: day})
            }>
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const mapStaettoprops = state => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};

export default connect(mapStaettoprops, {employeeUpdate})(EmployeeForm);
