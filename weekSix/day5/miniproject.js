let btn = document.getElementById('button')
btn.addEventListener('click', createTask)
let task = document.getElementById('taskName')
let textTask = document.getElementById('textArea')
let startDate = document.getElementById('startDate')
let endDate = document.getElementById('endDate')
let divTask = document.getElementById('tasks')

let arrayOfObjects = [];

// let test = document.getElementById('test')
// console.log(test.checked)
function createTask() {
    let taskValue = [];
    taskValue.push(task.value)
    taskValue.push(textTask.value)
    taskValue.push(startDate.value)
    taskValue.push(endDate.value)
    taskValue.push(false)
    arrayOfObjects.push(taskValue)
    console.log(arrayOfObjects)
    let datas = JSON.stringify(arrayOfObjects)
    localStorage.setItem('task',datas)
    task.value = ''
    textTask.value = ''
    startDate.value = ''
    endDate.value = ''
}



// let p1 = document.createElement('p')
// let p2 = document.createElement('p')
// let p3 = document.createElement('p')
// let check = document.createElement('input')
// check.setAttribute('type', 'checkbox')