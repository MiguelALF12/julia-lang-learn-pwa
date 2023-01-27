const { BrowserWindow } = require('electron');

// const modulesElements = [
//     ('modulesOne.html', document.getElementById('moduleOne')),
//     ('modulesTwo.html', document.getElementById('moduleTwo')),
//     ('modulesThree.html', document.getElementById('moduleThree')),
//     ('modulesFour.html', document.getElementById('moduleFour'))
// ];


const loadModule = (name = 'index') => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    console.log(name);
    win.loadFile(`templates/${name}.html`)

}


module.exports = { loadModule }