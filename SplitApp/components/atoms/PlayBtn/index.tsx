import {TouchableHighlight, View} from 'react-native';
import playBtnStyles from './styles';

const PlayBtn = () => {
  const {main, circle, triangle} = playBtnStyles;
  return (
    <TouchableHighlight style={main} onPress={() => console.warn('hello')}>
      <View style={circle}>
        <View style={triangle}></View>
      </View>
    </TouchableHighlight>
  );
};

export default PlayBtn;
