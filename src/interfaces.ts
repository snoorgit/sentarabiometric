import {ImageSourcePropType, StyleProp, ViewStyle} from 'react-native/types';

export interface SENTARABIOMETRIC_PROPS {
  isFeatureOn: boolean;
  imageFPEnabled: ImageSourcePropType;
  imageFPDisabled: ImageSourcePropType;
  signInPromptMsg: string;
  containerStyle: StyleProp<ViewStyle>;
  loginCallback: (response: object) => void;
  biometricSuccessMsg: string;
  cancelPromptMsg: string;
  biometricFailureMsg: string;
}
