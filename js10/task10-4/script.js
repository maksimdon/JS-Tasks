let submit = document.querySelector('.sub');
let ul = document.querySelector('ul');
let text = document.querySelector('.text');
let form = document.querySelector('form');
let tasks = [];
if(localStorage.tasks){
    tasks = JSON.parse(localStorage.tasks)
    tasks.forEach(element =>{
        let point = document.createElement('li');
        point.innerText = element;
        ul.appendChild(point);
    })
}


// Проверить есть ли что то в localStorage, если есть распарсить и записать в tasks, обойти этот массив и построить li для каждого элемента
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let li = document.createElement('li');
    let remover = document.createElement('button');
    remover.innerText = 'X'
    li.innerText = (text.value);
    tasks.push(text.value);
    localStorage.tasks = JSON.stringify(tasks);
    let checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    li.prepend(checkbox);
    li.append(remover);
    ul.appendChild(li);
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            li.classList.add('crossed')
            ul.appendChild(li);
        } else {
            li.classList.remove('crossed');
            ul.prepend(li);
        }
    });
    remover.addEventListener('click', () => {
        li.remove();
    })
    text.value = '';
});
let button = document.querySelector('.task2');
button.addEventListener('click', () => {
    let li = document.querySelectorAll('li');
    li.forEach(item => {
        item.style.textDecoration = 'line-through';
    })
})
