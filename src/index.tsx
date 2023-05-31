import React, {useEffect, useState} from 'react';
import {SENTARABIOMETRIC_PROPS} from './interfaces';
import {View, Image, TouchableOpacity} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

const sentarabiometric: React.FC<SENTARABIOMETRIC_PROPS> = ({
  isFeatureOn,
  imageFPDisabled,
  imageFPEnabled,
  signInPromptMsg,
  containerStyle,
  loginCallback,
  biometricSuccessMsg,
  cancelPromptMsg,
  biometricFailureMsg,
}) => {
  const [isSensorAvailabe, setIsSensorAvailable] = useState(false);

  useEffect(() => {
    try {
      ReactNativeBiometrics.isSensorAvailable().then(resultObject => {
        const {available, biometryType} = resultObject;
        if (
          available &&
          (biometryType === ReactNativeBiometrics.TouchID ||
            biometryType === ReactNativeBiometrics.FaceID ||
            biometryType === ReactNativeBiometrics.Biometrics)
        ) {
          setIsSensorAvailable(true);
        } else {
          setIsSensorAvailable(false);
        }
      });
    } catch (e) {}
  }, []);

  const validateFingerPrint = () => {
    ReactNativeBiometrics.simplePrompt({
      promptMessage: signInPromptMsg,
    })
      .then(resultObject => {
        const {success} = resultObject;
        if (success) {
          //returns back the object for the normal login flow
          loginCallback({
            status: 'success',
            message: biometricSuccessMsg,
          });
        } else {
          loginCallback({
            status: 'failure',
            message: cancelPromptMsg,
          });
        }
      })
      .catch(() => {
        loginCallback({
          status: 'failure',
          message: biometricFailureMsg,
        });
      });
  };

  return (
    <View style={containerStyle}>
      <TouchableOpacity style={{flex: 1}} onPress={() => validateFingerPrint()}>
        {isFeatureOn && isSensorAvailabe ? (
          <Image source={imageFPEnabled} />
        ) : (
          <>
            {isFeatureOn && isSensorAvailabe === false && (
              <Image source={imageFPDisabled} />
            )}
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default sentarabiometric;
