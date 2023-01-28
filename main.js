const { app, BrowserWindow, ipcMain } = require('electron');
const path = require("path");

//global var to mainWindow, accesable for chilWindow creation
let mainWindow;
const createWindow = () => {
    mainWindow = new BrowserWindow(
        {
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                // preload: path.join(__dirname, './preload.js')
            },
            show: false,
        }
    )

    mainWindow.loadFile("./templates/index.html");
    mainWindow.maximize();
    mainWindow.show();
}

const createChildWindow = (moduleHTMLName) => {
    childWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        show: false,
        parent: mainWindow,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });
    let moduleName = typeof moduleHTMLName == "string" ? moduleHTMLName.substring(0, (moduleHTMLName.length - 3)) : "error"
    childWindow.loadFile(`./templates/${moduleName}.html`);
    childWindow.once("ready-to-show", () => {

        childWindow.maximize();
        childWindow.show();
    })
}

ipcMain.on("openChildWindow", (event, args) => {
    createChildWindow(args);
})

function closeChildWindow(event) {
    if (event) {
        event.sender.close();
    }
}
ipcMain.on('goHome', (e, args) => {
    closeChildWindow(e);
    // console.log(BrowserWindow.getAllWindows());
});



app.whenReady().then(() => {
    createWindow();
    //Event: when the App has not quitted, a windows will appear. Only works on Mac beacuse there even though
    //          you exit from a page, you need to specify app.exit with CMD+Q or option > quit app
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length() != 0) createWindow()
    });

})

//Event: Exit from the app when all windows are closed. Only works on Windows and Linux
app.on("window-all-closed", () => {
    if (process.platform != 'darwin') app.quit();
})