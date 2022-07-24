import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import color from '../utils/color';
// tslint:disable: no-use-before-declare

type SuportedSpacing = 0 | 1 | 8 | 16;
type Props = {
  children: JSX.Element | JSX.Element[],
  style?: ViewStyle,
  paddingTop?: SuportedSpacing
  paddingRight?: SuportedSpacing
  paddingBottom?: SuportedSpacing
  marginLeft?: SuportedSpacing,
};

function getPadding({paddingTop, paddingRight, paddingBottom, marginLeft}:
  {paddingTop?: SuportedSpacing, paddingRight?: SuportedSpacing, paddingBottom?: SuportedSpacing, marginLeft?: SuportedSpacing}
  ) {
  paddingTop = paddingTop || 8;
  paddingRight = paddingRight || 8;
  paddingBottom = paddingBottom || 8;
  marginLeft = marginLeft || 8;
  return ({
    paddingTop: paddingTop,
    paddingRight: paddingRight,
    paddingBottom: paddingBottom,
    marginLeft: marginLeft
  });
}

export default function ({children, style, paddingTop, paddingRight, paddingBottom, marginLeft}: Props) {
  let paddings = getPadding({paddingTop, paddingRight, paddingBottom, marginLeft});
  return (<View style={[{elevation: 8}, style, paddings]}>
    <View style={styles.actionWrapper}>
      {children}
    </View>
  </View>);
}

const styles = StyleSheet.create({
  actionWrapper: {
    borderRadius: 10,
    backgroundColor: color.white,
    shadowColor: color.shadowColor,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 3,
    shadowOpacity: 1,
    shadowRadius: 8,
  }
});
