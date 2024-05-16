const { app, BrowserWindow, Menu } = require('electron/main')
const path = require('node:path')

function createWindow () {
  const win = new BrowserWindow({
    width: 370,
    height: 375,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'index.js')
    },
    icon: path.join(__dirname, 'icon', 'calculator.png')
  })

  win.loadFile('src/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})