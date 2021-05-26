import _ from 'lodash';
import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions/EmployeeActions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  rednerItem({item}) {
    return <ListItem employee={item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.rednerItem}
        keyExtractor={item => item.uid}
      />
    );
  }
}

const mapSateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });

  return {employees};
};

export default connect(mapSateToProps, {employeesFetch})(EmployeeList);
