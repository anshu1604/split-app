import {View} from 'react-native';
import {localization} from '../../../resources/localization';
import BottomCard from '../../atoms/BottomCard';
import {FormButton} from '../../atoms/Button';

const LandingPageCard = () => {
  return (
    <BottomCard>
      <View>
        <FormButton text={localization.loginBtn} />
        <FormButton text={localization.signupBtn} />
      </View>
    </BottomCard>
  );
};

export default LandingPageCard;
