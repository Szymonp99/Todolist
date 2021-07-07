let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField')

addToDoButton.addEventListener('click', function(){
    var paragrah = document.createElement('p')
    paragrah.classList.add('paragraph-styling')
    paragrah.innerText = inputField.value;
    toDoContainer.appendChild(paragrah);
    inputField.value = "";
    paragrah.addEventListener('click', function(){
        paragrah.style.textDecoration = "line-through";
    })
    paragrah.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragrah);
    })

})