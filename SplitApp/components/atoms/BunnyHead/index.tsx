import {Image, View} from 'react-native';
import bunnyStyles from './styles';

const BunnyHead = () => {
  return (
    <View style={bunnyStyles.main}>
      <Image source={require('./img/bunnyImage.png')} />
    </View>
  );
};

export default BunnyHead;
