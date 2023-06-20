const { app, BrowserWindow, ipcMain } = require('electron');

let win = null;

const createWindow = () => {
	win = new BrowserWindow({
		width: 800,
		height: 600,
		resizable: false,
		webPreferences: {
			nodeIntegration: true,
		},
	});

	win.loadFile('index.html');
};

app.whenReady().then(createWindow);

ipcMain.on('generatePassword', (event, data) => {
	console.log("🚀 ~ file: main.js:21 ~ ipcMain.on ~ data:", data)
	const randomPassword = data + Math.random().toString(36).substring(2, 5);
	win.webContents.send('receivePassword', randomPassword);
});
