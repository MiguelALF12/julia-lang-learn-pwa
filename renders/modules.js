const { ipcRenderer } = require('electron');

const goToHome = document.getElementById("homeLink")
goToHome.addEventListener('click', (event) => {
    if (event) {
        // window.electronAPI.goBackHome();
        ipcRenderer.send('goHome')
    }
})