/**
 * Sample ListviewModal
 */

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

class ListViewDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listArray: [],
      listArray2: [],
      popoverOneIsOpen: false,
      popOverTwoIsOpen: false,
      data: 'Nothing Selected',
      data2: 'Nothing Selected',
    };


  }
  componentWillMount() {
    const listArray = [
      'C',
      'C++',
      'Java',
      'JavaScript',
      'Python',
      'Ruby',
    ];
    const listArray2 = [
      'A',
      'B',
      'C',
      'D',
    ];
    this.setState({
      listArray,
      listArray2,
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.btn} onPress={() => { this.setState({popoverOneIsOpen: true}) } }>
          <Text>ListviewModal</Text>
        </TouchableHighlight>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.popoverOneIsOpen}
          onRequestClose={() => {console.log("Modal has been closed.")}}
        >
          <View>
            <ListviewModal
              listArray={this.state.listArray}
              title='ListviewModal'
              onClick={data=> this.setState({data:data})}
              onClose={() => this.setState({popoverOneIsOpen: false})}
            />
          </View>
        </Modal>

        <TouchableHighlight style={styles.btn} onPress={() => { this.setState({popoverTwoIsOpen: true}) } }>
          <Text>ListviewModal2</Text>
        </TouchableHighlight>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.popoverTwoIsOpen}
          onRequestClose={() => {console.log("Modal has been closed.")}}
        >
          <View>
            <ListviewModal
              listArray={this.state.listArray2}
              title='ListviewModal2'
              onClick={data=> this.setState({ data2: data}) }
              onClose={() => this.setState({popoverTwoIsOpen: false})}
            />
          </View>
        </Modal>

        <Text>{this.state.data}</Text>
        <Text>{this.state.data2}</Text>
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

AppRegistry.registerComponent('ListViewDemo', () => ListViewDemo);
