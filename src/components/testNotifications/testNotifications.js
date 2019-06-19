import * as notifier from '../../services/notification/notificationClient';

function FSBLReady() {
	//setup notifyButton1
	let count = 0;
	document.getElementById('notifyButton1').addEventListener('click', function (event) { 
		count++;
		notifier.notify("Test-Notification", "ALWAYS", "TEST-1", "Notification number " + count, {});
	}, false);

	//setup notifyButton2
	let spawnAction = {
		buttonText: "welcome!",
		type: "spawn",
		component: "Welcome Component",
		params: {
			left: 0,
			top: 0,
			height: 350,
			width: 350
		}
	};
	document.getElementById('notifyButton2').addEventListener('click', function (event) { 
		count++;
		notifier.notify("Test-Actions", "ALWAYS", "TEST-2", "Notification number " + count + " (with action)", {actions : [ spawnAction ]});
	}, false);
	
	//setup notifyButton3
	let windowIdentifier = {componentType: "Welcome Component", windowName: "WelcomeSingleton"};
	let showWindowAction = {
		buttonText: "show welcome!",
		type: "showWindow",
		windowIdentifier: windowIdentifier,
		params: {
			spawnIfNotFound: true,
			left: null,
			right: 0,
			top: 0,
			height: 350,
			width: 350
		}
	};
	document.getElementById('notifyButton3').addEventListener('click', function (event) { 
		count++;
		notifier.notify("Test-Actions", "ALWAYS", "TEST-3", "Notification number " + count + " (with showWindow)", {actions: [ showWindowAction ]});
	}, false);

	//setup notifyButton4
	let notepadSpawnAction = {
		buttonText: "notepad",
		type: "spawn",
		component: "Notepad",
		params: { }
	};
	let processMonitorSpawnAction = {
		buttonText: "Process Monitor",
		type: "spawn",
		component: "Process Monitor",
		params: { }
	};
	document.getElementById('notifyButton4').addEventListener('click', function (event) { 
		count++;
		notifier.notify("Test-Actions", "ALWAYS", "TEST-4", "Notification number " + count + " (with showWindow)", {actions: [spawnAction, showWindowAction, notepadSpawnAction, processMonitorSpawnAction ]});
	}, false);

};

if (window.FSBL && FSBL.addEventListener) {
	FSBL.addEventListener("onReady", FSBLReady)
} else {
	window.addEventListener("FSBLReady", FSBLReady)
}