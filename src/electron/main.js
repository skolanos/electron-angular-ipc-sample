const {app, BrowserWindow, ipcMain} = require('electron');

var mainWindow = null;

global.sharedData = {
	deckDef: []
};

function createMainWindow() {
	let wnd = new BrowserWindow({ width: 800, height: 600 });

	wnd.loadURL(`file://${__dirname}/index.html`);
	wnd.on('closed', () => {
		mainWindow = null;
	});
	wnd.webContents.openDevTools(); // DEBUG:

	return wnd;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
app.on('ready', () => {
	mainWindow = createMainWindow();
});
app.on('activate', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

ipcMain.on('get-data', (event, arg) => {
	global.sharedData.deckDef = [];
	for (let i = 0; i < 10; i += 1) {
		global.sharedData.deckDef.push('linia ' + i);
	}

	event.sender.send('get-data-replay', 'jakieś dane');
});
