/*Get shed color*/ 
function getSeedColor(){
    let seedColor = document.getElementById("color").value
    let seedArray = seedColor.split('')
    //console.log(seedArray) 
    seedArray.shift()
    //console.log(seedArray)
    let hexArray = seedArray.join("")
    return hexArray 
}


// Get mode selector

function modeSelector(){
    let modeOption = document.getElementById("mode").value
    let mode = modeOption.toLowerCase()
    return mode
    }


// Add data to the Dom

function renderColor(data){
    let colorDisplay = document.getElementById("colorSelection")
    let hexDisplay = document.getElementById("hexSelector")

    colorDisplay.innerHTML = ' ';
    hexDisplay.innerHTML = ' ';

    for (let color of data.colors){
        colorDisplay.innerHTML +=
        `<div class="schemeColor" style="background-color: ${color.hex.value}"></div>
        `
        hexDisplay.innerHTML +=
        `<div class="schemeHex">${color.hex.value}</div>
        `
        
    } 
}   


// Send request to Api

document.getElementById("getColorBtn").addEventListener("click", function(e){   
    fetch(`https://www.thecolorapi.com/scheme?hex=${getSeedColor()}&mode=${modeSelector()}`)
    .then(res => res.json())
    .then(data => renderColor(data))
})
