import {View} from 'react-native';
import TriangleCard from '../../atoms/TriangleCard';
import landingCardStyles from './styles';
import BunnyHead from '../../atoms/BunnyHead';

const LandingCard = () => {
  const {main, bunnyContainer} = landingCardStyles;
  return (
    <View style={main}>
      <View>
        <TriangleCard />
      </View>
      <View style={bunnyContainer}>
        <BunnyHead />
      </View>
    </View>
  );
};

export default LandingCard;
