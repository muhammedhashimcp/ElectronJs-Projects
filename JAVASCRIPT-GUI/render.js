const ipcRenderer = require('electron').ipcRenderer;
const generatePassword = () => {
	alert('here called')
	ipcRenderer.send(
		'generatePassword',
		document.querySelector('.keyWord').value
	);
};

ipcRenderer.on('receivePassword', (event, data) => {
	// alert(data);
	const passwordTag = document.querySelector('#password');
	passwordTag.innerText = data;
});
