Atmosphere Standalone App
=======
 
This directory contains the source for building the Atmosphere mobile application for
both Android and iOS devices.
 
 
Requirements
-----------

General installation requires an Apache Cordova/Phonegap build environment complete with Node.js, 
NPM and the Cordova CLI. 

Note: As of Feb. 2017 Cordova CLI 6.5.0+ is required, Android SDK 23 is required for Android and
the Bluetooth LE plugin 4.3.0+ is required. Older environments will fail to build.

Per platform installation requires Android SDK or XCode for iOS.

 
Installation via Corvova CLI
-----------

### Linux

1. Make sure your build environment is setup properly with the above requirements.
2. Run build_android.sh to build for Android.  iOS projects can only be built on Mac.

### Mac

1. Make sure your build environment is setup properly with the above requirements.
2. Run build_android.sh to build for Android. 
3. Run build_ios.sh to build for iOS.

### Windows

Installation on Windows is only available for Android.  The Android build environment for 
Windows instructions can be found on the Atmosphere Wiki (Advanced App Development). Having 
the proper Phonegap and Android build environment with Node.js and NPM is a prerequisite 
for continuing.

1. Run build_android.bat
2. With an android device plugged in via USB and the proper drivers setup for the Google
   USB driver, phonegap should install and run the .apk to your device at this time.

Hint: The Android SDK comes with a handy tool called Monitor that will report debug data
for your application.


Installation via Phonegap Online Build Tool
-----------

1. Uncomment the necessary lines in your config.xml 
2. Load the contents of your project into PGB (PhoneGap Build) and build your project.
3. PhoneGap build has extended documentation on it's environment including how to add 
   your iOS developer key and how to publish to app stores.