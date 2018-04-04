#!/bin/bash

rm -rf ./platforms/*
rm -rf ./plugins/*
rm -rf ./node_modules/*

phonegap platform add ios

phonegap plugin add cordova-plugin-device
phonegap plugin add cordova-plugin-inappbrowser
phonegap plugin add cordova-plugin-vibration
phonegap plugin add cordova-plugin-camera
phonegap plugin add cordova-plugin-device-orientation
phonegap plugin add cordova-plugin-device-motion
phonegap plugin add cordova-plugin-file
phonegap plugin add cordova-plugin-dialogs
phonegap plugin add cordova-plugin-media
phonegap plugin add cordova-plugin-network-information
phonegap plugin add cordova-plugin-bluetoothle@4.3.0
phonegap plugin add cordova-plugin-console
phonegap plugin add cordova-plugin-splashscreen
phonegap plugin add cordova-plugin-statusbar
phonegap plugin add cordova-sms-plugin

phonegap build ios

phonegap build ios --release

# phonegap run ios -d
