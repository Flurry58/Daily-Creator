const debug = false

const { app, BrowserWindow } = require('electron')
const nativeImage = require('electron').nativeImage;
    var image = nativeImage.createFromPath(__dirname + '5762100-200.png'); 
 // where public folder on the root dir

    image.setTemplateImage(true);
let win
 
function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    transparent: false,
    icon: 'icon.ico',
    webPreferences: {
      nodeIntegration: true
    }
  })
 
  // and load the index.html of the app.
  win.loadFile('./index.html')
  //win.loadURL('https://google.com/')
 
  // Open the DevTools.
  if(debug){win.webContents.openDevTools()}
 
  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}
 
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)
 
// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
 
app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})