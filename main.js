// we want to dublicate our crosses content 10 times 
const dublicateHTML = (element, quantity) => {
    const newContent = new Array(quantity).fill(element.innerHTML).join('')
    element.innerHTML = newContent
}

const crosses = document.querySelector('#crosses')
dublicateHTML(crosses, 10)

anime({
    // just a regular css selector
    targets: '#tunnel circle',
    // here we scale ut up by 20%
    scale: 1.1,
    // this alternates so it returns to begining fro the end 
    direction: 'alternate',
    // it loops over and over
    loop: true,
    duration: 250,
    // easings allow us to add a bit character to our animations rather than just being linear
    easing: 'easeInOutSine',
    // we can apply a delay as a static value
    // when we use it as a function itloops through every single item
    // and gives us the element itself, the index and the length
    delay: (el, index) => index * 50,

    // ниже более старый метод написания функции
    //  delay: function (el, i, l) {
    //     console.log(el, i, l)
    //     return i * 50;
    // }
})

// here we set up the conveyor effect
anime({
    targets: '.conveyor',
    // we only want to move it left by half of its width
    translateX: '-50%',
    duration: 1500,
    loop: true,
    // remove the easing effect to keep it consistently smooth
    easing: 'linear',
    // autoplay: true
})

const zigZagPath = document.querySelector('#zigzag path')
// setDashoffset figures ot how long our path is
const zigZagOffset = anime.setDashoffset(zigZagPath)
// we then set that back onto tha path element
zigZagPath.setAttribute('stroke-dashoffset', zigZagOffset)

anime({
    targets: zigZagPath,
    strokeDashoffset: [zigZagOffset, 0],
    duration: 3000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
})

// we dublicate the same code (pretty much) for the wave 
const wavePath = document.querySelector('#wave path')
const waveOffset = anime.setDashoffset(wavePath)
wavePath.setAttribute('stroke-dashoffset', waveOffset)
anime({
    targets: wavePath,
    strokeDashoffset: [0, waveOffset],
    duration: 2000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
})


