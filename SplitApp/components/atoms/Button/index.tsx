import {Text, TouchableHighlight, View} from 'react-native';
import {buttonStyles} from './styles';

type FormBtnProps = {
  text: string;
};

const FormButton = (props: FormBtnProps) => {
  const {text} = props;
  return (
    <TouchableHighlight style={buttonStyles.formBtn}>
      <Text style={buttonStyles.formBtnTxt}>{text}</Text>
    </TouchableHighlight>
  );
};

export {FormButton};
