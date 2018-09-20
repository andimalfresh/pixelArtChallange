
var div1 = document.createElement("div1")
div1.style.width = "50px"
div1.style.height = "50px"
div1.style.background = "white"
div1.style.borderColor = "black"
div1.style.borderWidth = "5px"
div1.style.borderStyle = "solid"

document.querySelector(".gameboard").appendChild(div1);

function makeBox() {
    for (var i = 0; i < 241; i++) {
        var div1 = document.createElement("div1")
        div1.style.width = "50px"
        div1.style.height = "50px"
        div1.style.background = "white"
        div1.style.borderColor = "black"
        div1.style.borderWidth = "5px"
        div1.style.borderStyle = "solid"
        document.querySelector(".gameboard").appendChild(div1)

    }
}
makeBox()

var yellowClick = document.querySelector('.color1')
yellowClick.addEventListener('click', function (event) {
    console.log('Test Fired - Yellow')
    var mouseEvent = document.querySelector('.gameboard')
    mouseEvent.addEventListener('click', function (event) {
        event.target.style.backgroundColor = 'yellow'
    })
})

var purpleClick = document.querySelector('.color2')
purpleClick.addEventListener('click', function (event) {
    console.log('Test Fired - Purple')
    var mouseEvent = document.querySelector('.gameboard')
    mouseEvent.addEventListener('click', function (event) {
        event.target.style.backgroundColor = 'purple'
    })
})

var brownClick = document.querySelector('.color3')
brownClick.addEventListener('click', function (event) {
    console.log('Test Fired - brown')
    var mouseEvent = document.querySelector('.gameboard')
    mouseEvent.addEventListener('click', function (event) {
        event.target.style.backgroundColor = 'brown'
    })
})




// This Worked before

// var mouseEvent = document.querySelector('.gameboard')
// mouseEvent.addEventListener('mouseover', function (event) {
//     event.target.style.backgroundColor = 'white'
// })

// end




// var colorChange = document.querySelector('color1')
    // colorChange.addEventListener('click', function (event) {       
    // })
//     var yellowClick = document.querySelector('reset')
// yellowClick.addEventListener('click', function (event) {
//     event.target.style.backgroundColor = 'yellow'
// })