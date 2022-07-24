import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import color from '../utils/color';
import TQImage from './TQImage';
// tslint:disable: no-use-before-declare

type SuportedSpacing = 0 | 8 | 12 | 16;
type Props = {
  children: JSX.Element,
  badge?: JSX.Element,
  style?: ViewStyle,
  padding?: SuportedSpacing
  hideBorder?: boolean
  hideArrow?: boolean
  endText?: JSX.Element
};

export default function ({children, style, padding = 8, badge, hideBorder, hideArrow, endText}: Props) {
  return (<View style={[{...styles.actionWrapper, padding}, style, !hideBorder && styles.borderBot]}>
    <View style={{flex: 1}}>
      {children}
    </View>
    <View>
      {!!badge && <View style={{paddingRight: 8}}>{badge}</View>}
      {!!endText && <View>{endText}</View>}
      {!hideArrow && <View style={styles.containerArrow}>
        <View style={styles.iconArrow}>
          <TQImage iconSize={24} name={'chevron'} />
        </View>
      </View>}
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  actionWrapper: {
    flexDirection: 'row'
  },
  borderBot: {
    borderBottomColor: color.cardBorder,
    borderBottomWidth: 1
  },
  iconArrow: {
    alignItems: 'flex-end'
  },
  containerArrow: {
    flex: 1,
    justifyContent: 'center'
  }
});
