import {StyleSheet} from 'react-native';
import {Colors} from '../../../resources/styleConstants';

const bottomCardStyles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: Colors.light_dark,
  },
  card: {
    flex: 0.5,
    backgroundColor: Colors.medium,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    shadowColor: Colors.dark,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default bottomCardStyles;
