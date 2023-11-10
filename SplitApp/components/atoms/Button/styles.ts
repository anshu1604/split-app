import {StyleSheet} from 'react-native';
import {Colors} from '../../../resources/styleConstants';

export const buttonStyles = StyleSheet.create({
  formBtn: {
    backgroundColor: Colors.light_dark,
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 40,
    alignContent: 'center',
    margin: 10,
  },
  formBtnTxt: {
    fontSize: 35,
    color: Colors.medium,
    textAlign: 'center',
  },
});
