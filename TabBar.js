'use strict';

import React from 'react-native';
let {
  StyleSheet,
  View,
} = React;

import Layout from './Layout';

export default class TabBar extends React.Component {
  static propTypes = View.propTypes;

  render() {
    return (
      <View {...this.props} style={[styles.container, this.props.style]}>
        {this.props.children}
        <View style={styles.shadow} />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: Layout.tabBarHeight,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  shadow: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    height: Layout.pixel,
    position: 'absolute',
    left: 0,
    right: 0,
    top: -Layout.pixel,
  },
});
