import React, {Component} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {CardSection} from './common';

class ListItem extends Component {
  onItemPress() {
    Actions.employeeEdit({employee: this.props.employee});
  }

  render() {
    const {name} = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onItemPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.title}> {name} </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingLeft: 15,
  },
});

export default ListItem;
