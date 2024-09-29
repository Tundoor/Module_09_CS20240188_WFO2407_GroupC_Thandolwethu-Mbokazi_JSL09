// Fetches background image from  Api

fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=universe')
    .then(res => res.json())
    .then(data => {
        document.getElementById('body').style.backgroundImage = `url(${data.urls.full})`
        // Gets the author's name.
        document.getElementById('author').textContent = `By: ${data.user.name}`
    }) 
    // Add catch 
        

    // fetches crypto currency

fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
.then(res => res.json())
.then( data => {
    // add the crypto currency on page
    document.getElementById("crypto-top").innerHTML = `
    <img src=${data.image.small} />
    <span>${data.name}</span>`
    
    // Adds the prices of crypto on page
    document.getElementById("crypto").innerHTML += ` 
    <p>Current: R${data.market_data.current_price.zar}</p>
    <p>👆: R${data.market_data.high_24h.zar}</p>
    <p>👇: R${data.market_data.low_24h.zar}</p>
    `
})
.catch(err => console.log(err))

window.onload = displayClock()

function displayClock () {const date = new Date()
let time = date.toLocaleTimeString("en-us", {timeStyle: "short"})
document.getElementById("time").textContent = time
setTimeout(displayClock, 1000)
}

