import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';

class AddPerson extends Component {
  render() {
    return (
      <View>
        <Text>Add person screen</Text>
      </View>
    );
  }
}

export default connect(null, actions)(AddPerson);
