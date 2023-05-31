import React from 'react';
import renderer from 'react-test-renderer';
import {TouchableOpacity} from 'react-native';
import SentaraBiometric from '../index';
const mockedCallBack = jest.fn();
const mockSetState = jest.fn();
jest.mock('react-native-biometrics', () => {
  return {
    simplePrompt: jest.fn(() =>
      Promise.resolve({
        success: true,
        error: undefined,
      }),
    ),
    isSensorAvailable: jest.fn(() =>
      Promise.resolve({
        available: true,
        biometryType: 'TouchID',
        error: undefined,
      }),
    ),
  };
});

describe('Rendering SENTARABiometric', () => {
  it('renders correctly', () => {
    renderer.create(
      <SentaraBiometric
        isFeatureOn={true}
        imageFPDisabled={require('./images/fingerprint-disabled.png')}
        imageFPEnabled={require('./images/fingerprint.png')}
        signInPromptMsg="Sign in with your biometric (Touch the biometric sensor)"
        containerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        loginCallback={mockedCallBack}
        biometricSuccessMsg="Biometric authentication success."
        cancelPromptMsg="User cancelled the biometric."
        biometricFailureMsg="Enroll for biometric login or biometric failed."
      />,
    );
  });

  it('Snap shot of SENTARABiometric', () => {
    const scomponent = renderer
      .create(
        <SentaraBiometric
          isFeatureOn={true}
          imageFPDisabled={require('./images/fingerprint-disabled.png')}
          imageFPEnabled={require('./images/fingerprint.png')}
          signInPromptMsg="Sign in with your biometric (Touch the biometric sensor)"
          containerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          loginCallback={mockedCallBack}
          biometricSuccessMsg="Biometric authentication success."
          cancelPromptMsg="User cancelled the biometric."
          biometricFailureMsg="Enroll for biometric login or biometric failed."
        />,
      )
      .toJSON();
    expect(scomponent).toMatchSnapshot();
  });

  it('Snap shot of SENTARABiometric feature off and check failure case', () => {
    jest.spyOn(React, 'useState').mockImplementation(mockSetState);
    const failureComponent = renderer.create(
      <SentaraBiometric
        isFeatureOn={false}
        imageFPDisabled={require('./images/fingerprint-disabled.png')}
        imageFPEnabled={require('./images/fingerprint.png')}
        signInPromptMsg="Sign in with your biometric (Touch the biometric sensor)"
        containerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        loginCallback={mockedCallBack}
        biometricSuccessMsg="Biometric authentication success."
        cancelPromptMsg="User cancelled the biometric."
        biometricFailureMsg="Enroll for biometric login or biometric failed."
      />,
    );
    const touchable = failureComponent.root.findByType(TouchableOpacity);
    expect(touchable).toBeTruthy();
    touchable.props.onPress();
  });

  it('Find Button and validate on sensor availability', () => {
    jest.spyOn(React, 'useState').mockImplementation(mockSetState);
    const rootComponent = renderer.create(
      <SentaraBiometric
        isFeatureOn={true}
        imageFPDisabled={require('./images/fingerprint-disabled.png')}
        imageFPEnabled={require('./images/fingerprint.png')}
        signInPromptMsg="Sign in with your biometric (Touch the biometric sensor)"
        containerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        loginCallback={mockedCallBack}
        biometricSuccessMsg="Biometric authentication success."
        cancelPromptMsg="User cancelled the biometric."
        biometricFailureMsg="Enroll for biometric login or biometric failed."
      />,
    );
    //check for button length
    const touchable = rootComponent.root.findByType(TouchableOpacity);
    expect(touchable).toBeTruthy();
    touchable.props.onPress();
  });
});
