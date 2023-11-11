import {View} from 'react-native';
import LandingCard from '../../molecules/LandingCard';
import landingStyles from './styles';

const Landing = () => {
  const {main} = landingStyles;
  return (
    <View style={main}>
      <LandingCard />
    </View>
  );
};

export default Landing;
