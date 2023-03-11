const tittle1 = document.querySelector('.tittle1')
const tittle2 = document.querySelector('.tittle2')
const hacklist = document.querySelector('.hack-list')
const fracklist = document.querySelector('.fracasados-list')
const header = document.querySelector('header')
const loader = document.querySelector('.loader')


tittle1.addEventListener('click', () => {
    hacklist.classList.toggle('fade')
    img.classList.toggle('fade2')
})

tittle2.addEventListener('click', () => {
    fracklist.classList.toggle('fade')
})

setTimeout( () =>{
    loader.classList.add('hide')
}, 3000)
