import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Modal,
} from 'react-native';
import { ListviewModal, ListviewModalBtn } from './ListViewModal';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listArray: [],
      popoverIsOpen: false,
      data: 'Nothing Selected',
    };

    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {

    const listArray = [
      'C',
      'C++',
      'Java',
      'JavaScript',
      'Python',
      'Ruby',
    ];
    this.setState({
      listArray,
    });
  }
  onClick(data) {
    console.log('selected data:', data);
    this.setState({
      data,
    });
  }
  render() {
    return (
      <View>

        <ListviewModalBtn
          listArray={this.state.listArray}
          title='ListviewModalBtn'
          btnText='ListviewModalBtn'
          onClick={this.onClick}
        />

        <Text>{this.state.data}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  btn: {
    padding: 5,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#444444',
    margin: 5,
  },
});

export default Button;
