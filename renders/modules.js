const ipcRenderer = require('electron').ipcRenderer;

const goToHome = document.getElementById("homeLink")
goToHome.addEventListener('click', (event) => {
    if (event) {
        // window.electronAPI.goBackHome();
        ipcRenderer.send('goHome')
    }
})

const moduleTitle = document.getElementById("moduleTitleParagraph");