## Installation
Run ``` npm install --save snoorgit/sentarabiometric in your project directory. ```

## Installing dependencies into your managed project
Run ``` npm install --save react-native-biometrics@2.1.4 ```

Kindly check the installation and setup for the dependency [here](https://github.com/SelfLender/react-native-biometrics)

## How to Use
This component is specific to Sentara for biometric login. You can import the component as 

```ts
import SentaraBiometric from 'sentara-biometrics';
```

Use it inside the component render section

```ts
<SentaraBiometric
isFeatureOn={boolean}
imageFPDisabled={imgsource}
imageFPEnabled={imgsource}
signInPromptMsg={string}
loginCallback={callback}
biometricSuccessMsg={string}
cancelPromptMsg={string}
biometricFailureMsg={string}
containerStyle={styleObject}
/>
```

  ### Properties
Property | Type | Description
--- | --- | ---
isFeatureOn | boolean | whether this biometric login is On/Off within app
imageFPDisabled | imgsource (ImageSourcePropType) | image source for biometric disabled state
imageFPEnabled | imgsource (ImageSourcePropType) | image source for biometric enabled state
signInPromptMsg | string | message to be sent on callback function
loginCallback | callback | function to be called back after biometric success/failure/cancel
biometricSuccessMsg | string | message to be sent on callback function when biometric success
cancelPromptMsg | string | message to be sent on callback function when user cancels biometric
biometricFailureMsg | string | message to be sent on callback function when biometric fails
containerStyle | styleObject | style to be passed for the biometric view container

---

# <ins>Component Specifications</ins>
Following specifications are useful to the developer who are going to work in this component.

### Use Cases
- The component should return callback function containing status
- The component should accept the props mentioned above

### Interface for the props

```ts
interface SENTARABIOMETRIC_PROPS {
  isFeatureOn: boolean;
  imageFPEnabled: ImageSourcePropType;
  imageFPDisabled: ImageSourcePropType;
  signInPromptMsg: string;
  containerStyle: StyleProp<ViewStyle>;
  loginCallback: function;
  biometricSuccessMsg: string;
  cancelPromptMsg: string;
  biometricFailureMsg: string;
}
```

### Unit Test Cases
- Check is it rendering successfully.
