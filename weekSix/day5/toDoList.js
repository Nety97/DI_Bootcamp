let tas = localStorage.getItem('task')
let tasks = JSON.parse(tas)

let box = document.getElementById('box')
console.log(tasks)




tasks.sort(function(a,b) {
    return(new Date(a[2]) - new Date(b[2]))
})


for (let index = 0; index < tasks.length; index++) {
    
    let mainDiv = document.createElement('div')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    let p4 = document.createElement('p')
    let p5 = document.createElement('p')
    let div = document.createElement('div')
    let check = document.createElement('input')
    let br = document.createElement('br')
    let btn = document.createElement('button') 
    p1.textContent = tasks[index][0]
    p1.style.fontSize = '20px';
    p1.classList.add('content')
    p2.textContent = tasks[index][0]
    p3.textContent = tasks[index][1]
    btn.textContent = 'Delete task'
    div.classList.add('disp')
    check.setAttribute('type', 'checkbox')
    check.setAttribute('id', 'che')
    let date = new Date()
    p1.style.color = 'red'
    
    // let date1 = new Date(tasks[index][2]);
    let date1 = new Date(tasks[index][3]);

    const diffTime = Math.abs(date1 - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffHour = Math.ceil(diffTime / (1000 * 60 * 60)) 
    const dif = date < date1
    
    
    if (dif) {
        if (diffHour > 24) {
            p4.textContent = `Time left ${diffDays} days`
            
        } else {
            p4.textContent = `Time left ${diffHour} hours`
        }
    } else {
        p4.textContent = `the time tasks alredy pass`
        p1.classList.add('finish') 
    }

    
    div.appendChild(p2)
    div.appendChild(p3)
    div.appendChild(p4)
    mainDiv.appendChild(p1)
    mainDiv.appendChild(div)
    mainDiv.appendChild(check)
    mainDiv.appendChild(btn)
    box.appendChild(mainDiv)
    box.appendChild(br)

    

    check.addEventListener('change', function() {
    if (this.checked) {
        tasks[index][4] = true
        console.log("Checkbox is checked..");
        p5.textContent = 'Task Completed'
        div.appendChild(p5)
        console.log(tasks)
    } else {
        console.log("Checkbox is not checked..");
        p5.innerHTML = ""
        tasks[index][4] = false
    }
    if (tasks[index][4] == true) {
        p1.classList.add('complete')
        console.log('if')
    } else{
        p1.classList.remove('complete')
    }
    });
    
    btn.addEventListener('click', deleteTask)
      
}

function deleteTask(e) {
    if (confirm()) {
        e.target.parentElement.remove()
    } 
}
// localStorage.clear()

