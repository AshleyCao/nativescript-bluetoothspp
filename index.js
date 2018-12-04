"use strict"
var application = require("application");
var startPort  = new pfdfoods.foodservice.ashleycao.bluetoothspp.BluetoothSPP();
var context = application.android.context;

var BTReader = (function () {
  
 function BTReader(){
	 this._result="";
	 
	}
	//find Device Massage:
	//Bluetooth is unable: "No bluetooth adapter available"
	//Device not match: "Device Name doesn't match"
	//No connected devices: "Cannot find any connected device"
	BTReader.prototype.findDevice = function (deviceName) { 
	var  message =  startPort.findBT(deviceName);
		return message;
	};
	//Critical step: build connction
    BTReader.prototype.buildConnection = function () { 
	var ifsuccess = startPort.openBT();
	return ifsuccess;
	};
	BTReader.prototype.loopThread = function () { 
	var scanResult = startPort.loopThread();
	return scanResult;
	};
	// check socket and inputStream
	BTReader.prototype.checkSocketStream = function () { 
	var checkresult = startPort.checkConnected();
	return checkresult;
	};
	//Get connected devices 
	BTReader.prototype.getPairDevice = function () { 
	var deviceList = startPort.getPairDevice();
	return deviceList;
	};
	//Readin input stream
    BTReader.prototype.buildInputStream = function () { 
	startPort.buildInputStream();
	};
	//closeBTconnection
	BTReader.prototype.stopLoop = function () { 
	startPort.closeReader();
	};
	//closeBTconnection
	BTReader.prototype.closeConnection = function () { 
	startPort.closeConnection();
	};
	//Check connectedStock
	BTReader.prototype.connectStatus = function () { 
	var result = startPort.checkDeviceConnected();
	return result;
	};
	//get socket
	BTReader.prototype.btScocket = function () { 
	var socket = startPort.getStocket();
	return socket;
	};
    return BTReader;
}());
exports.BTReader = BTReader;
