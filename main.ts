import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import * as url from 'url'

let win: BrowserWindow

app.on('ready', createWindow)

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})

function createWindow() {
    win = new BrowserWindow({ width: 620, height: 350, frame: false })


    
    win.loadURL('http://localhost:4200')

    win.webContents.openDevTools();

    

    win.on('closed', () => {
        win = null
    })
}