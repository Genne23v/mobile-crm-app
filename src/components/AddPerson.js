import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {MKColor} from 'react-native-material-kit';
import {Button} from '@rneui/base';
import {Input} from '@rneui/themed';
import * as actions from '../actions';

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  fieldStyles: {
    height: 40,
    color: MKColor.Orange,
  },
  addButton: {
    marginTop: 20,
  },
});

class AddPerson extends Component {
  onAddPress() {
    const {firstName, lastName, phone, email, company, project, notes} =
      this.props;

    this.props.createNewContact({
      firstName,
      lastName,
      phone,
      email,
      company,
      project,
      notes,
    });

    this.props.navigation.navigate('People');
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <Text>Add a new contact</Text>
          <Input
            placeholder="First name..."
            inputStyle={styles.fieldStyles}
            value={this.props.firstName}
            onChangeText={value =>
              this.props.formUpdate({prop: 'firstName', value})
            }
          />
          <Input
            placeholder="Last name..."
            inputStyle={styles.fieldStyles}
            value={this.props.lastName}
            onChangeText={value =>
              this.props.formUpdate({prop: 'lastName', value})
            }
          />
          <Input
            placeholder="Phone number..."
            inputStyle={styles.fieldStyles}
            value={this.props.phone}
            onChangeText={value =>
              this.props.formUpdate({prop: 'phone', value})
            }
          />
          <Input
            placeholder="Email..."
            inputStyle={styles.fieldStyles}
            value={this.props.email}
            onChangeText={value =>
              this.props.formUpdate({prop: 'email', value})
            }
          />
          <Input
            placeholder="Company..."
            inputStyle={styles.fieldStyles}
            value={this.props.company}
            onChangeText={value =>
              this.props.formUpdate({prop: 'company', value})
            }
          />
          <Input
            placeholder="Project..."
            inputStyle={styles.fieldStyles}
            value={this.props.project}
            onChangeText={value =>
              this.props.formUpdate({prop: 'project', value})
            }
          />
          <Input
            placeholder="Notes..."
            inputStyle={styles.fieldStyles}
            value={this.props.notes}
            onChangeText={value =>
              this.props.formUpdate({prop: 'notes', value})
            }
          />
          {/* <MKTextField
            textInputStyle={styles.fieldStyles}
            placeholder={'First name...'}
            tintColor={MKColor.Teal}
          />
           */}
          <View style={styles.addButton}>
            <Button title="ADD" onPress={this.onAddPress.bind(this)} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const {firstName, lastName, phone, email, company, project, notes} = state;
  return {
    firstName,
    lastName,
    phone,
    email,
    company,
    project,
    notes,
  };
};
export default connect(mapStateToProps, actions)(AddPerson);
