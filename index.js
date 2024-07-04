let containerArray = JSON.parse(localStorage.getItem('container')) || [];
function renderHtml() {
    let htmlContainer = '';

    for (let i = 0; i < containerArray.length; i++) {
        const arrayElement = containerArray[i];
        const { task, date } = arrayElement;
        const html = `<div class = "task-html">${task} </div>
        <div class = "date-html"> ${date}</div>
        <button class = "delete-btn" onclick = "
        deleteTask(${i});
        ">Delete</button>`;
        htmlContainer += html;
    }
    const htmlSelector = document.querySelector('.container-task-list');
    htmlSelector.innerHTML = htmlContainer;
}

function addToList() {
    const taskHtml = document.querySelector('.input-task')
    const dateHtml = document.querySelector('.input-date')
    let task = taskHtml.value;
    let date = dateHtml.value;
    if(task && date){
        containerArray.push(
            {
                task,
                date
            }
        )
        localStorage.setItem('container', JSON.stringify(containerArray));
        taskHtml.value = '';
        dateHtml.value = '';
        renderHtml();
    }else{
        alert('Please fill out both the inputs!');
    }
}
function deleteTask(index){
    containerArray.splice(index, 1);
    localStorage.setItem('container', JSON.stringify(containerArray));
    renderHtml();
}
function resetTask(){
    containerArray = [];
    localStorage.removeItem('container');
    renderHtml();
}
window.onload = function () {
    renderHtml();
}