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
    colorDisplay = document.getElementById("colorSelection").innerHTML
    hexDisplay = document.getElementById("hexSelector").innerHTML
    let colorDisplay = ''
    let hexDisplay = ''
    for (let color of data.color){
        colorDisplay +=
        `<div class="schemeColor" style="background-color: ${color.hex.value}"></div>
        `
        hexDisplay +=
        `<div class="schemeHex" style="background-color: ${color.hex.value}"></div>"`
    } 
}   


// Send request to Api

document.getElementById("getColorBtn").addEventListener("click", function(e){   
    fetch(`https://www.thecolorapi.com/scheme?hex=${getSeedColor()}&mode=${modeSelector()}`)
    .then(res => res.json())
    .then(data => renderColor(data))
})
