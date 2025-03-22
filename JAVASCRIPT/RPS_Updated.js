let point = JSON.parse(localStorage.getItem('point')) || { win: 0, lose: 0, tie: 0 };
document.querySelector(".dicription")
    .innerHTML = `Wins:${point.win} Lose:${point.lose} Tie:${point.tie}`

function computer() {
    let compmove;
    let random_no = Math.random()
    if (random_no < 1 / 3) {
        compmove = "Rocks"
    }
    else if (random_no < 2 / 3 && random_no > 1 / 3) {
        compmove = "Paper"
    }
    else if (random_no > 2 / 3 && random_no <= 1) {
        compmove = "Scissors"
    }
    return compmove;
}
function win_lose(playermove) {
    let outcome = computer()
    let result;
    if (playermove == "Rocks") {
        playermove = "&#9994";
        if (outcome == "Rocks") {
            point.tie++;
            result = "Tie"
            outcome = "&#9994;"
        }
        else if (outcome == "Paper") {
            point.lose++;
            result = "Lose"
            outcome = "&#9995";

        }
        else if (outcome == "Scissors") {
            point.win++;
            result = "Win"
            outcome = "&#9996;"
        }
    }
    else if (playermove == "Paper") {
        playermove = "&#9995";
        if (outcome == "Rocks") {
            point.win++;
            result = "Win"
            outcome = "&#9994;"
        }
        else if (outcome == "Paper") {
            point.tie++;
            result = "Tie"
            outcome = "&#9995";

        }
        else if (outcome == "Scissors") {
            point.lose++;
            result = "Lose"
            outcome = "&#9996;"

        }
    }
    else if (playermove == "Scissors") {
        playermove = "&#9996;"

        if (outcome == "Rocks") {
            point.lose++;
            result = "Lose"
            outcome = "&#9994;"

        }
        else if (outcome == "Paper") {
            point.win++;
            result = "Win"
            outcome = "&#9995";

        }
        else if (outcome == "Scissors") {
            point.tie++;
            result = "Tie"
            outcome = "&#9996;"

        }
    }

    localStorage.setItem('point', JSON.stringify(point))
    document.querySelector(".result")
        .innerHTML = `${result}`
    document.querySelector(".Move")
        .innerHTML = `Your:<span class="emonji">${playermove}</span> Computer:<span class="emonji">${outcome}</span?`

    document.querySelector(".dicription")
        .innerHTML = `Wins:${point.win} Lose:${point.lose} Tie:${point.tie}`
}
document.querySelector('.Rock')
    .addEventListener('click', () => {
        win_lose('Rocks')
    })
document.querySelector('.Paper')
    .addEventListener('click', () => {
        win_lose('Paper')
    })
document.querySelector('.Scissors')
    .addEventListener('click', () => {
        win_lose('Scissors')
    })
function reset() {
    point.win = 0
    point.lose = 0
    point.tie = 0
    document.querySelector('.dicription')
        .innerHTML = `Wins:${point.win} Lose:${point.lose} Tie:${point.tie}`;
    document.querySelector(".Move")
        .innerHTML = ``
    return point;
}
document.querySelector('.Reset')
    .addEventListener('click', () => {
        reset()
    })
let isautoplaying = false
let setID;
function autoplay() {
    if (!isautoplaying) {
        setID = setInterval(function () {
            const playermove = computer()
            win_lose(playermove)
        }, 2000)
        isautoplaying = true
    }
    else {
        clearInterval(setID)
        isautoplaying = false
    }
}
document.querySelector('.Auto')
    .addEventListener('click', () => {
        let val = document.querySelector('.Auto').innerHTML
        autoplay()
        if (val === 'AutoPlay') {
            document.querySelector('.Auto')
                .innerHTML = `Stop`
        }
        else {
            document.querySelector('.Auto')
                .innerHTML = `AutoPlay`
        }

    })
document.body.addEventListener("keydown", (event) => {
    if (event.key == "r" || event.key == "R") {
        win_lose("Rocks")
    }
    else if (event.key == "p" || event.key == "P") {
        win_lose("Paper")
    }
    else if (event.key == "s" || event.key == "S") {
        win_lose("Scissors")
    }
})
