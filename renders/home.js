const { ipcRenderer } = require('electron');

const modulesElements = [
    document.getElementById("modulesOneBtn")
]
modulesElements.forEach((m) => {
    m.addEventListener('click', (event) => {
        if (event) {
            // console.log(event.target.id);
            ipcRenderer.send('openChildWindow', event.target.id)
        }
    })
})
