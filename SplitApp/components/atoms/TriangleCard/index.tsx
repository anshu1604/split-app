import {Image, View} from 'react-native';
import triangleCardStyles from './styles';

const TriangleCard = () => {
  const {card} = triangleCardStyles;

  return <Image style={card} source={require('./img/cardImage.png')} />;
};

export default TriangleCard;
