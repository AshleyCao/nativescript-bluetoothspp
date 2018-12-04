# Before you install
There is a beautiful plugin https://github.com/EddyVerbruggen/nativescript-bluetooth-demo which is developed by EddyVerbruggen. 
However, it doesn't go very well with my Android Device. Here is the Android project link for creating/updating aar file in the project.

# Install
This app is built with the [NativeScript CLI](https://github.com/NativeScript/nativescript-cli). 
Once you have the CLI installed, start by cloning the repo:
```
$ git@github.com:AshleyCao/nativescript-bluetoothspp.git
$ tns install
$ tns run android
````

# Usage
1. Get all connected devices  ```GetPairDevice()```
2. Find target device ```findDevice()```
3. Build Bluetooth connection ```buildConnection()```
4. Start reading data in ```loopThread()``` 
   Recommend to put this in worker( yes, mutiple threads for Javascript) to reduce delay while waiting input
   If you are not sure about inputStream status, run ```checkSocketStream()```
   
5. Close inputSteam and then close bt connection ```stopLoop()``` and ```closeConnection()```

# Note
Please note Nativescript provide a well-rounded instruction for creating a [plugin](https://docs.nativescript.org/plugins/building-plugins).
Also, Naticescript Plugin Seed is awesome as well.
However, if you are like me ( not have enough time), just simply clone this project and compress it .tgz file. Put it in app root folder and
in your package.json file, add ```"nativescript-portscanner": "file:nativescript-portscanner.tgz"```
