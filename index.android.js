/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';

const LOREM_IPSUM =  `Mauris cursus mi ultricies venenatis tincidunt. Donec sed purus venenatis, cursus dolor at, pellentesque lectus. Cras vitae metus fermentum, molestie metus et, pretium turpis. Cras pulvinar scelerisque nulla, sed ornare nisl ultrices at. Nunc eget sodales est. Nullam libero dui, mattis tincidunt nisl eu, egestas sagittis velit. Sed ipsum nunc, dictum vel ultricies in, rhoncus eu tortor. Nullam pretium sem sed risus consequat ultrices. Etiam in porttitor velit. Vestibulum suscipit tortor orci, sed congue nulla sollicitudin a. Suspendisse sagittis varius fringilla. Duis imperdiet, velit vel commodo lacinia, dui eros laoreet sapien, nec pulvinar turpis orci eget lorem. Suspendisse non lorem dolor. Aenean luctus maximus lectus at semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed non pretium dolor, vel elementum risus.`;

import GrowingTextInput from 'GrowingTextInput';

class TextInputFocusExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ex1: LOREM_IPSUM,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        { this._renderEx1() }
      </View>
    );
  }

  _renderEx1() {
    return (
      <GrowingTextInput
        style={styles.ex1}
        value={this.state.ex1}
        onChangeText={text => this.setState({ex1: text})}
        placeholder='Placeholder text here'
        multiline
      />
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
  ex1: {
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    paddingVertical: 15,
  },
});

AppRegistry.registerComponent('TextInputFocusExample', () => TextInputFocusExample);
