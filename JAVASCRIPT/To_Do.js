let tasklist = JSON.parse(localStorage.getItem("tasklist")) || []
show()
function show() {
    let htmlupdate = "";
    tasklist.forEach((taskobj, index) => {
        let taskobj = tasklist[i]
        const { name, date } = taskobj
        const todo = `
        <div class="Work">${name}</div>
        <div class="Week">${date} </div> 
        <button onclick="
                tasklist.splice(${i},1)
                show()
        " class="Delete_Button">Delete</button>`
        const final = todo
        htmlupdate += final

    });
    document.querySelector('.Showcase')
        .innerHTML = `${htmlupdate}`
    console.log(htmlupdate);

    localStorage.setItem("tasklist", JSON.stringify(tasklist))
}
function add() {
    let inputTask = document.querySelector('.task').value
    let inputDay = document.querySelector('.day').value
    if (inputTask !== undefined && inputDay !== undefined) {
        tasklist.push({
            name: inputTask,
            date: inputDay
        })
    }

    console.log(typeof inputDay);

    document.querySelector('.task').value = ""
    document.querySelector('.day').value = ""
}

