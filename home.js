const { app, Menu } = require('electron')
const electron = require("electron")
const path = require('path')
const remote = electron.remote
const BrowserWindow = electron.remote.BrowserWindow

const usBtn = document.querySelector("#us");
const us_spBtn = document.querySelector("#us_sp");
const egBtn = document.querySelector("#eg");
const eg_spBtn = document.querySelector("#eg_sp");

usBtn.addEventListener("click", function (event) {
  const modelPath = path.join(__dirname, 'index.html')
  let win = new BrowserWindow({
    width: 1000, height: 800, webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      enableRemoteModule: true,

    }
  });
  win.on("close", () => { win = null })
  win.loadFile(modelPath)
  win.show()
})

us_spBtn.addEventListener("click", function (event) {
  const modelPath = path.join(__dirname, 'us_sp.html')
  let win = new BrowserWindow({
    width: 1000, height: 800, webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      enableRemoteModule: true,

    }
  });
  win.on("close", () => { win = null })
  win.loadFile(modelPath)
  win.show()
})



egBtn.addEventListener("click", function (event) {
  const modelPath = path.join(__dirname, 'indexeg.html')
  let win = new BrowserWindow({
     width: 1000, height: 800, webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });
  win.on("close", () => { win = null })
  win.loadFile(modelPath)
  win.show()

})

eg_spBtn.addEventListener("click", function (event) {
  const modelPath = path.join(__dirname, 'eg_sp.html')
  let win = new BrowserWindow({
    width: 1000, height: 800, webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      enableRemoteModule: true,

    }
  });
  win.on("close", () => { win = null })
  win.loadFile(modelPath)
  win.show()
})
