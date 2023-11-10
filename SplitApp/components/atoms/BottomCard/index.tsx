import {Text, View} from 'react-native';
import {Colors} from '../../../resources/styleConstants';
import bottomCardStyles from './styles';

type Props = {
  children: JSX.Element;
};

const BottomCard = (props: Props) => {
  const {main, card} = bottomCardStyles;

  const {children} = props;
  return (
    <View style={main}>
      <View style={card}>{children}</View>
    </View>
  );
};

export default BottomCard;
