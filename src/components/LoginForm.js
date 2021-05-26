import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {StyleSheet, View, Text} from 'react-native';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const {email, password} = this.props;

    this.props.loginUser({email, password});
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorText}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderButtom() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeTextInput={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeTextInput={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        {this.renderError()}
        <CardSection>{this.renderButtom()}</CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const {email, password, error, loading} = state.auth;
  return {
    email,
    password,
    error,
    loading,
  };
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center',
  },
});

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginForm);
