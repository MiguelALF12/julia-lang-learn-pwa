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
            },
            show: false,
        }
    )

    mainWindow.loadFile("./templates/index.html");
    mainWindow.maximize();
    mainWindow.show();
}

const createChildWindow = () => {
    const childWindow = new BrowserWindow(
        {
            width: 1000,
            height: 700,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                // preload: path.join(__dirname, 'preload.js')
            },
            show: false,
            parent: mainWindow,
        }
    )
    childWindow.loadFile("./templates/modulesOne.html");
    childWindow.once("ready-to-show", () => {
        childWindow.show();
    })
}

ipcMain.on("openChildWindow", (event, args) => {
    // console.log("Hello");
    createChildWindow();
})

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