import {StyleSheet} from 'react-native';
import {Colors} from '../../../resources/styleConstants';

const playBtnStyles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 70,
    height: 70,
    backgroundColor: Colors.light_dark,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    elevation: 4,
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 18,
    borderRightWidth: 18,
    borderBottomWidth: 28,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Colors.light,
    transform: [{rotate: '90deg'}],
  },
});

export default playBtnStyles;
