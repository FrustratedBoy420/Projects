let tasklist = JSON.parse(localStorage.getItem("tasklist")) || []
show()
function show() {
    let htmlupdate = "";
    tasklist.forEach((taskobj, index) => {
        const { name, date } = taskobj
        const todo = `
        <input type="Radio">
        <div class="Work">${name}</div>
        <div class="Week">${date} </div> 
        <button class="Delete_Button">Delete</button>`
        const final = todo
        htmlupdate += final

    });
    document.querySelector('.Showcase')
        .innerHTML = `${htmlupdate}`
    document.querySelectorAll('.Delete_Button')
        .forEach((DeleteBut, index) => {
            DeleteBut.addEventListener('click', () => {
                tasklist.splice(index, 1)
                show()
            })
        })

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
    document.querySelector('.task').value = ""
    document.querySelector('.day').value = ""
}
document.querySelector('.add_button')
    .addEventListener('click', () => {
        add()
        show()
    })

