let fullImageBox = document.querySelector('#fullImageBox')
let fullImage = document.querySelector('#fullImage')

document.querySelectorAll('.gallery-image').forEach(image => {
    image.addEventListener('click', () => {
        console.log(image)
        fullImageBox.style.display = 'flex'
        fullImage.src = image.src
    })
})


document.querySelector('#exit').addEventListener('click', () => {
    fullImageBox.style.display = 'none'
})