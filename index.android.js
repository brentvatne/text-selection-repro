/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  ListView,
  TouchableOpacity,
  View
} from 'react-native';

const LOREM_IPSUM =  `Mauris cursus mi ultricies venenatis tincidunt. Donec sed purus venenatis, cursus dolor at, pellentesque lectus. Cras vitae metus fermentum, molestie metus et, pretium turpis. Cras pulvinar scelerisque nulla, sed ornare nisl ultrices at. Nunc eget sodales est. Nullam libero dui, mattis tincidunt nisl eu, egestas sagittis velit. Sed ipsum nunc, dictum vel ultricies in, rhoncus eu tortor. Nullam pretium sem sed risus consequat ultrices. Etiam in porttitor velit. Vestibulum suscipit tortor orci, sed congue nulla sollicitudin a. Suspendisse sagittis varius fringilla. Duis imperdiet, velit vel commodo lacinia, dui eros laoreet sapien, nec pulvinar turpis orci eget lorem. Suspendisse non lorem dolor. Aenean luctus maximus lectus at semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed non pretium dolor, vel elementum risus.`;

import GrowingTextInput from 'GrowingTextInput';

class TextInputFocusExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ex1: LOREM_IPSUM.slice(0, 150),
      ex2: LOREM_IPSUM.slice(150, LOREM_IPSUM.length),
    };
  }

  render() {
    let dataSource = new ListView.DataSource({rowHasChanged: () => true});
    dataSource = dataSource.cloneWithRows([{text: 'hello'}]);

    return (
      <View style={{flex: 1}}>
        <Text style={styles.header}>ListView Container</Text>
        <ListView
          renderScrollComponent={props => <ScrollView {...props} />}
          renderHeader={() => this._renderEx1() }
          renderRow={() => this._renderEx2() }
          dataSource={dataSource}
        />

        <Text style={styles.header}>ScrollView Container</Text>
        <ScrollView>
          {this._renderEx1()}
          {this._renderEx2()}
        </ScrollView>

        <Text style={styles.header}>View Container</Text>
        <View>
          {this._renderEx1()}
          {this._renderEx2()}
        </View>
      </View>
    );
  }

  _renderEx1() {
    return (
      <GrowingTextInput
        style={styles.ex}
        value={this.state.ex1}
        maxLength={200}
        minHeight={100}
        onChangeText={text => this.setState({ex1: text})}
        placeholder='Placeholder text here'
        multiline
      />
    );
  }

  _renderEx2() {
    return (
      <GrowingTextInput
        style={styles.ex}
        value={this.state.ex2}
        maxLength={200}
        minHeight={100}
        onChangeText={text => this.setState({ex2: text})}
        placeholder='Placeholder text here'
        multiline
      />
    );
  }
}

const styles = StyleSheet.create({
  ex1: {
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: 'transparent',
    textAlignVertical: 'top',
    height: 20,
    fontSize: 18.5,
    lineHeight: 22,
    paddingLeft: 20,
    paddingVertical: 15,
  },
  header: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 15,
  }
});

AppRegistry.registerComponent('TextInputFocusExample', () => TextInputFocusExample);
