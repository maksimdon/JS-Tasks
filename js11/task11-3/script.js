if(localStorage.pic){
    document.body.style.backgroundImage = `url(${localStorage.pic})`
}
let backgroundMenu = document.querySelectorAll('img');
window.addEventListener('click', (event) =>{
    console.log(event.target)
    backgroundMenu.forEach(element =>{
        element.classList.remove('active')
        if(element == event.target){
            document.body.style.backgroundImage = `url(${element.src})`;
            element.classList.add('active')
            localStorage.pic = element.getAttribute('src');
        }
    })
})
