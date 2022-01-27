const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  quit: () => {
    ipcRenderer.send('quit')
  },
})
