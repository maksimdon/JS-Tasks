let bbutton = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let closer = document.querySelector('.sec-butt');
bbutton.addEventListener('click', () =>{
    // console.log('привет')
    menu.classList.remove('invisible');
    closer.classList.remove('invisible');
    bbutton.classList.add('invisible')
})
closer.addEventListener('click', ()=>{
    menu.classList.add('invisible');
    closer.classList.add('invisible');
    bbutton.classList.remove('invisible')
})