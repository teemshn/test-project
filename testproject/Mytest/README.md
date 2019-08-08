
# react-native-mytest

## Getting started

`$ npm install react-native-mytest --save`

### Mostly automatic installation

`$ react-native link react-native-mytest`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-mytest` and add `RNMytest.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNMytest.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNMytestPackage;` to the imports at the top of the file
  - Add `new RNMytestPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-mytest'
  	project(':react-native-mytest').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-mytest/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-mytest')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNMytest.sln` in `node_modules/react-native-mytest/windows/RNMytest.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Mytest.RNMytest;` to the usings at the top of the file
  - Add `new RNMytestPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNMytest from 'react-native-mytest';

// TODO: What to do with the module?
RNMytest;
```
  