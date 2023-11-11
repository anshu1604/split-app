import {View} from 'react-native';
import LandingCard from '../../molecules/LandingCard';
import landingStyles from './styles';
import PlayBtn from '../../atoms/PlayBtn';

const Landing = () => {
  const {main} = landingStyles;
  return (
    <View style={main}>
      <View style={{flex: 1}}>
        <LandingCard />
      </View>
      <View style={{position: 'absolute', bottom: 125}}>
        <PlayBtn />
      </View>
    </View>
  );
};

export default Landing;
