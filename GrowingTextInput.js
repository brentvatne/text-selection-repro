/**
 * Copyright 2015-present 650 Industries. All rights reserved.
 *
 * @providesModule GrowingTextInput
 */
import React, {
  PropTypes,
  TextInput,
} from 'react-native';

export default class GrowingTextInput extends React.Component {
  static propTypes = {
    minHeight: PropTypes.number,
    onChange: PropTypes.func,
    ...TextInput.propTypes,
  };

  static defaultProps = {
    minHeight: 50,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      height: props.minHeight,
    };
  }
  render() {
    return (
      <TextInput
        ref={c => { this._ref = c; }}
        underlineColorAndroid="rgba(0, 0, 0, 0)"
        {...this.props}
        onChange={(e) => {
          this._onChangeContentSize(e);
          this.props.onChange && this.props.onChange(e);
        }}
        style={[
          this.props.style,
          { height: Math.max(this.props.minHeight, this.state.height) },
        ]}
      />
    );
  }

  _onChangeContentSize(e) {
    this.setState({ height: e.nativeEvent.contentSize.height });
  };
}
