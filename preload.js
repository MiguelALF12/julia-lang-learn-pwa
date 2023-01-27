const { ipcRenderer } = require('electron');

function goToModule(name) {
    console.log(name)
    ipcRenderer.send('openChildWindow')
}