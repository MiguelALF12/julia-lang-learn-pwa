const { contextBridge, ipcRenderer } = require('electron');


contextBridge.exposeInMainWorld('electronAPI', {
    goBackHome: () => ipcRenderer.send('goHome')
})