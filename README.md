
### How to Use
This component can be used for biometric login
Import the Component

```ts
import sentarabiometric from 'sentarabiometric';
```

Use it inside the component render section

```ts
<sentarabiometric
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
