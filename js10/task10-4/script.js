let submit = document.querySelector('.sub');
let ul = document.querySelector('ul');
let text = document.querySelector('.text');
let form = document.querySelector('form');
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    let li = document.createElement('li');
    let remover = document.createElement('button');
    remover.innerText = 'X'
    li.innerText = (text.value);
    let checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    li.prepend(checkbox);
    li.append(remover); 
    ul.appendChild(li);
    checkbox.addEventListener('click', () => {
        if (checkbox.checked){
            li.classList.add('crossed')
            ul.appendChild(li);
        } else{
            li.classList.remove('crossed');
            ul.prepend(li);
        }
    });
    remover.addEventListener('click', ()=>{
        li.remove();
    })
    text.value = ''; 
});
