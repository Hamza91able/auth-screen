# User Authentication App 👋
This application contains the following features

### Screens
1. Login Screen
2. Signup Screen
3. Home Screen

### Features
1. Auth Context to handle authentication flow (Login, Signup, and Logout)
2. Expo Navigation
3. Proper validations for all input fields
4. Persistent Authentication using AsyncStorage
5. Clean & Sleak UI with support of ScrollView and KeyboardAvoidingView
6. Password visibility toggle

## Release
You can get the preview build from the [release section](https://github.com/Hamza91able/auth-screen/releases/tag/preview)

## Short View Link
[Video](https://drive.google.com/file/d/14v2JuViVfo5TryMnOB0gLp-SQu3C695A/view?usp=sharing)


## Get started

1. Clone Repository

2. Install dependencies

   ```bash
   npm install
   ```

3. Build the application using EAS CLI
   
    ```bash
    npm install -g eas-cli
    eas login
    eas build:configure
    eas build --platform android --profile development
   ```

4. Install the development build on your device
   
After the build is complete, scan the QR code in your terminal or open the link on your device. Tap Install to download the build on your device, then tap Open to install it.

5. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo
