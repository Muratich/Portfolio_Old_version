const projs = document.querySelectorAll('.ProjectLink')
const trieds = document.querySelectorAll('.TriedLogo')
const globalBack = document.querySelector('html')
const Yakors = document.querySelectorAll('.YakorButt')
projs.forEach(function(elem) {
    elem.addEventListener("mouseover", function() {
        elem.style.color = '#2585c7'
        elem.style.fontFamily = 'Impact'
    })

    elem.addEventListener('mouseout', () => {
        elem.style.color = 'rgba(255, 253, 205, 0.856)'
        elem.style.fontFamily = 'Trebuchet MS'
    })
})
Yakors.forEach(function(elem) {
    elem.addEventListener("mouseover", function() {
        elem.style.color = '#2585c7'
    })

    elem.addEventListener('mouseout', () => {
        elem.style.color = 'rgba(255, 253, 205, 0.856)'
    })
})
trieds.forEach(function(elem) {
    elem.addEventListener("mouseover", function() {
        elem.style.backgroundColor = '#00000066'
        elem.style.transform = 'scale(1.2)'
    })

    elem.addEventListener('mouseout', () => {
        elem.style.backgroundColor = '#00000000'
        elem.style.transform = 'scale(1)'
    })
})
setInterval(() => {
    let numer = Math.floor(Math.random() * 9);
    globalBack.style.backgroundImage = `url(img/Backs/back${numer}.png)`
}, 15000)