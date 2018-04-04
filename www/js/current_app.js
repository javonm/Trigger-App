
function MyApp(parent) {

	var airMe = this;
	
	this.parent = parent;

	this.parent.buildUuid = "76e0b9a2-0085-440f-8bde-aea55d9733c5";
	this.parent.projectName = "BLE_Trigger";
	this.parent.cloudUrl = "app.atmosphereiot.com:1337";
		
	this.parent.cloudCredentialsOnEmbedded = true;
		
	this.parent.serviceUUID = "164d4b74-fd28-4e9f-b77e-250415f6f64e";
	this.parent.notifyUUID = "164d4b74-fd28-4e9f-b77e-250415f6f64f";
		
	this.parent.localName = "ble_test";
	this.parent.embeddedChains = {"ADCRead1": []};

	this.element_ADCRead1_valueReturned = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue =  airMe.element_ADCRead1.getValue();
			var value = sourceValue;
			atmoLocalValues["value"] = sourceValue;
			try {
				eval("targetValues.value = " + "value", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"ADCRead1\" ]---X--->[ \"Label6\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_Label6.setValue(clone(targetValues.value));
					
			//airMe.parent.debugLog("Connection Event: [ \"ADCRead1\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"Label6\" ]");
		})();

	};

	this.element_Button0_mousePressed = function(e) {
		(function(){
			var targetValues = {};
			var atmoLocalValues = {};
			atmoLocalValues["targetValues"] = {};
			var sourceValue;
			try {
				eval("targetValues.value = " + "undefined", atmoLocalValues);
				
				if(typeof atmoLocalValues === "object" && atmoLocalValues.targetValues !== undefined && Object.keys(atmoLocalValues.targetValues).length !== 0) {
					targetValues = atmoLocalValues.targetValues;
				}
			}
			
			catch(err) {
				if(airMe.parent.debugLog !== undefined) {
					airMe.parent.debugLog("Connector Error: [ \"Button0\" ]---X--->[ \"ADCRead1\" ] " + err.toString());
				}
				
				return;
			}
				
			airMe.element_ADCRead1.execute(clone(targetValues.value));
					
			//airMe.parent.debugLog("Connection Event: [ \"Button0\" ]---(" + JSON.stringify(targetValues) + ")--->[ \"ADCRead1\" ]");
		})();

	};

		this.layouts = {"Default": {"devicename": ".*", "elements": {"Button0": {"y": 104, "x": 57, "height": 46, "width": 146}, "Label6": {"y": 105, "x": 222, "height": 46, "width": 146}}, "orientation": "portrait", "platform": "", "height": 1024, "width": 768, "version": ".*", "name": "Default (768x1024)"}, "GalaxyS7": {"devicename": ".*", "elements": {"Button0": {"y": 109, "x": 17, "height": 46, "width": 146}, "Label6": {"y": 117, "x": 180, "height": 31, "width": 83}}, "orientation": "portrait", "platform": "Android", "height": 640, "width": 360, "version": ".*", "name": "Samsung Galaxy S7"}};
			
	this.initialize = function() {

			this.currentLayout = this.parent.layoutSelector(this.layouts);
			
			
			this.element_ADCRead1 = new FunctionElement(this.parent, "ADCRead1", 31, "164d4b74-fd28-4e9f-b77e-250415f6f650", "int", "void");
				
			if(this.element_ADCRead1_onTrigger)
				this.element_ADCRead1.onTrigger = this.element_ADCRead1_onTrigger;
			
			if(this.element_ADCRead1_valueReturned)
				this.element_ADCRead1.valueReturned = this.element_ADCRead1_valueReturned;
				
			if(this.element_ADCRead1_notified)
				this.element_ADCRead1.notified = this.element_ADCRead1_notified;
		
			this.element_GATTImmediateAlert3 = new GATTImmediateAlertElement(this.parent);
			
			if(this.element_GATTImmediateAlert3_onTrigger)
				this.element_GATTImmediateAlert3.onTrigger = this.element_GATTImmediateAlert3_onTrigger;

		
			this.element_Label6 = new LabelElement(this.parent, "Label6");
			
			this.element_Label6.setValue("--.-");
			this.element_Label6.setVisible(true);
			this.element_Label6.setEnabled(true);
			this.element_Label6.setColor("Black");
			this.element_Label6.setFont("20px Arial");
			
			if(this.element_Label6_onTrigger !== undefined)
				this.element_Label6.onTrigger = this.element_Label6_onTrigger;
			
			if(this.element_Label6_mousePressed !== undefined)
				this.element_Label6.mousePressed = this.element_Label6_mousePressed;
				
			if(this.element_Label6_mouseClicked !== undefined)
				this.element_Label6.mouseClicked = this.element_Label6_mouseClicked;
			
			if(this.element_Label6_mouseReleased !== undefined)
				this.element_Label6.mouseReleased = this.element_Label6_mouseReleased;
			
			if(this.element_Label6_mouseEntered !== undefined)
				this.element_Label6.mouseEntered = this.element_Label6_mouseEntered;
			
			if(this.element_Label6_mouseMoved !== undefined)
				this.element_Label6.mouseMoved = this.element_Label6_mouseMoved;
			
			if(this.element_Label6_mouseExited !== undefined)
				this.element_Label6.mouseExited = this.element_Label6_mouseExited;
			
			this.element_Label6.setBounds(this.layouts[this.currentLayout]["elements"]["Label6"].x, 
								this.layouts[this.currentLayout]["elements"]["Label6"].y, 
								this.layouts[this.currentLayout]["elements"]["Label6"].width, 
								this.layouts[this.currentLayout]["elements"]["Label6"].height);
							
		
			this.element_Button0 = new ButtonElement(this.parent, "Button0");
			
			this.element_Button0.setLabel("Start Test");
			this.element_Button0.setVisible(true);
			this.element_Button0.setEnabled(true);
		
			this.element_Button0.setBorder("plain");

			if(this.element_Button0_onTrigger !== undefined)
				this.element_Button0.onTrigger = this.element_Button0_onTrigger;
			
			if(this.element_Button0_mousePressed !== undefined)
				this.element_Button0.mousePressed = this.element_Button0_mousePressed;
				
			if(this.element_Button0_mouseClicked !== undefined)
				this.element_Button0.mouseClicked = this.element_Button0_mouseClicked;
			
			if(this.element_Button0_mouseReleased !== undefined)
				this.element_Button0.mouseReleased = this.element_Button0_mouseReleased;
			
			if(this.element_Button0_mouseEntered !== undefined)
				this.element_Button0.mouseEntered = this.element_Button0_mouseEntered;
			
			if(this.element_Button0_mouseMoved !== undefined)
				this.element_Button0.mouseMoved = this.element_Button0_mouseMoved;
			
			if(this.element_Button0_mouseExited !== undefined)
				this.element_Button0.mouseExited = this.element_Button0_mouseExited;
			
			this.element_Button0.setBounds(this.layouts[this.currentLayout]["elements"]["Button0"].x, 
							this.layouts[this.currentLayout]["elements"]["Button0"].y, 
							this.layouts[this.currentLayout]["elements"]["Button0"].width, 
							this.layouts[this.currentLayout]["elements"]["Button0"].height);
			
		
			this.element_Connection4 = new ConnectionElement(this.parent);
			
			if(this.element_Connection4_onTrigger)
				this.element_Connection4.onTrigger = this.element_Connection4_onTrigger;
		
			if(this.element_Connection4_connecting)
				this.element_Connection4.connecting = this.element_Connection4_connecting;
		
			if(this.element_Connection4_connected)
				this.element_Connection4.connected = this.element_Connection4_connected;
		
			if(this.element_Connection4_disconnecting)
				this.element_Connection4.disconnecting = this.element_Connection4_disconnecting;
		
			if(this.element_Connection4_disconnected)
				this.element_Connection4.disconnected = this.element_Connection4_disconnected;
		
			this.element_Scanner5 = new ScannerElement(this.parent);
			
			if(this.element_Scanner5_onTrigger)
				this.element_Scanner5.onTrigger = this.element_Scanner5_onTrigger;
		
			if(this.element_Scanner5_deviceDiscovered)
				this.element_Scanner5.deviceDiscovered = this.element_Scanner5_deviceDiscovered;
		
			if(this.element_Scanner5_scanningStarted)
				this.element_Scanner5.scanningStarted = this.element_Scanner5_scanningStarted;
		
			if(this.element_Scanner5_scanningStopped)
				this.element_Scanner5.scanningStopped = this.element_Scanner5_scanningStopped;
		
			this.element_GATTBattery2 = new GATTBatteryElement(this.parent);
			
			if(this.element_GATTBattery2_onTrigger)
				this.element_GATTBattery2.onTrigger = this.element_GATTBattery2_onTrigger;
				
			if(this.element_GATTBattery2_batteryLevelRead)
				this.element_GATTBattery2.batteryLevelRead = this.element_GATTBattery2_batteryLevelRead;
				
			if(this.element_GATTBattery2_batteryLevelNotified)
				this.element_GATTBattery2.batteryLevelNotified = this.element_GATTBattery2_batteryLevelNotified;

		
			if (typeof this.element_Button0.getZebraUIElement === "function") { 
			this.parent.appPanel.add(this.element_Button0.getZebraUIElement());
			}
			
			if (typeof this.element_Label6.getZebraUIElement === "function") { 
			this.parent.appPanel.add(this.element_Label6.getZebraUIElement());
			}
			
	};

}
