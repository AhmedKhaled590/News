// Modules to control application life and create native browser window
const {app,Menu} = require('electron')
const path = require('path')
const electron = require("electron")
const {remote} = require('electron');
const BrowserWindow = remote.BrowserWindow
const axios = require('axios');
var con = document.querySelector(".card-columns");


// document.getElementById('close').addEventListener('click', closeWindow);
// document.getElementById('minimize').addEventListener('click', minimizeWindow);
// document.getElementById('maximize').addEventListener('click', maximizeWindow);

// /*
//   getFocusedWindow() may return null.
//   If a user uses global keyboard shortcut to trigger 
//   minimizeWindow, there may not be any window that 
//   is focused right now
// */ 
// const getWindow = () => remote.BrowserWindow.getFocusedWindow();

// function closeWindow () {
//     getWindow().close();
// }

// function minimizeWindow () {  
//     getWindow().minimize();
// }

// function maximizeWindow () {
//     const window = getWindow();
//     window.isMaximized() ? window.unmaximize() : window.maximize();
// }



function getNews() {
    console.log(con)
    axios.get('http://newsapi.org/v2/top-headlines?country=us&apiKey=b2a4d4a93297428c9975515e525fc4b7')
        .then(res => {
            const cryptos = res.data
            var i = 0;
            for (var obj in cryptos.articles) {
                con.innerHTML += ` <div class="card " ">
                <img class="card-img-top" src="${cryptos.articles[i].urlToImage}" alt="Card image">
                <div class="card-body">
                  <h5 class="card-title">${cryptos.articles[i].title}</h5>
                  <p class="card-text">${cryptos.articles[i].description}</p>
                  <a target=_blank href="${cryptos.articles[i].url}" class="btn btn-danger">Read more</a>
                </div>
              </div>
              `;
                i++;

            }
        })
}
getNews()



const refBtn = document.querySelector("#ref");

refBtn.addEventListener("click", function (event) {
 var win = remote.getCurrentWindow()
 win.reload()

})