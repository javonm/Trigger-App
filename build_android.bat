@echo off
CLS

title Atmosphere PhoneGap Android Builder for Windows
color 1f

echo --------------------------------------------------------------
echo     Welcome to Atmosphere PhoneGap Android for Windows
echo.
echo  Before running this make sure that you have installed the 
echo  necessary requirements for building a phonegap/android 
echo  application in your windows environment.
echo. 
echo  For more information visit app.atmosphereiot.com/wiki
echo.
echo --------------------------------------------------------------
echo.

CHOICE /C YND /N /M "Do you want to build? (Y/N or D for debug builder)"
IF ERRORLEVEL 1 SET decision=Yes:
IF ERRORLEVEL 2 SET decision=No
IF ERRORLEVEL 3 SET decision=Debug

IF /I  "%decision%"=="No" GOTO quit
IF /I  "%decision%"=="Debug" GOTO Debug

GOTO install

:install
echo INSTALLING...

phonegap platform add android@5.0.0 & phonegap build android --release & phonegap plugin add cordova-custom-config & phonegap plugin add cordova-plugin-device & phonegap plugin add cordova-plugin-inappbrowser & phonegap plugin add cordova-plugin-vibration & phonegap plugin add cordova-plugin-camera & phonegap plugin add cordova-plugin-device-orientation & phonegap plugin add cordova-plugin-device-motion & phonegap plugin add cordova-plugin-file & phonegap plugin add cordova-plugin-dialogs & phonegap plugin add cordova-plugin-media & phonegap plugin add cordova-plugin-network-information & phonegap plugin add cordova-plugin-bluetoothle@4.3.0 & phonegap plugin add cordova-plugin-fullscreen & phonegap plugin add cordova-plugin-statusbar & phonegap plugin add cordova-sms-plugin & phonegap run android -d

color 0f

:Debug
echo Debugging...

phonegap platform add android@5.0.0 & pause & 
phonegap plugin add cordova-custom-config & pause &
phonegap plugin add cordova-plugin-device & pause & 
phonegap plugin add cordova-plugin-inappbrowser & pause & 
phonegap plugin add cordova-plugin-vibration & pause & 
phonegap plugin add cordova-plugin-camera & pause & 
phonegap plugin add cordova-plugin-device-orientation & pause & 
phonegap plugin add cordova-plugin-device-motion & pause & 
phonegap plugin add cordova-plugin-file & pause & 
phonegap plugin add cordova-plugin-dialogs & pause & 
phonegap plugin add cordova-plugin-media & pause & 
phonegap plugin add cordova-plugin-network-information & pause & 
phonegap plugin add cordova-plugin-bluetoothle@4.3.0 & pause & 
phonegap plugin add cordova-plugin-fullscreen & pause & 
phonegap plugin add cordova-plugin-statusbar & pause & 
phonegap plugin add cordova-sms-plugin & pause &

phonegap run android -d
color 0f

:quit
echo Android Build Cancelled
color 0f
