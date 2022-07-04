//Place X and 0 on a selected cell
let move = 0
let result = ''
let win = ''
const gameboard = document.querySelector('.gameboard')
const divIDArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
// console.log('divIDArr', divIDArr)
function validate() {
    // console.log(win)
    if ((move > 9)) {
        return false
    } else if (win === 1) {
        return true
    } else if (divIDArr.length === 1) {
        return true

    }
}



function randomMove() {
    const divID = divIDArr[Math.floor(Math.random() * divIDArr.length)];

    let element = document.getElementById(divID)
    // console.log('compMove', divID)

    element.classList.toggle('playedEven')
    divIDArr.splice(divIDArr.indexOf(divID), 1)
    // console.log('compMove', divID)

    // console.log('compMove', divIDArr)
    element.setAttribute("data-value", "2")
    move++
}

function moveHandler(event) {
    if (validate() === true) {
        event.cancel = true

    } else if (event.target.classList.contains('cell') && (move % 2 == 0)) {
        event.target.classList.toggle('playedOdd')
        event.target.setAttribute("data-value", "1")
        divIDArr.splice(event.target.id, 1)
        // console.log('playerMove', divIDArr)

        updateMatrix()
        randomMove()
        move++
    }
}

gameboard.addEventListener('click', moveHandler)

const arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0]
function createMatrix() {
    for (let j = 0; j < 9; j++) {
        let mydiv = document.getElementById(j)
        let myval = mydiv.dataset.value
        arr1.splice(j, 1, myval)
    }
}

function updateMatrix() {
    createMatrix()

    let board = [
        [arr1[0], arr1[1], arr1[2]],
        [arr1[3], arr1[4], arr1[5]],
        [arr1[6], arr1[7], arr1[8]]
    ]

    let diagonalLeft = []
    diagonalLeft.push(board[0][0], board[1][1], board[2][2])
    let diagonalRight = []
    diagonalRight.push(board[2][0], board[1][1], board[0][2])
    if (diagonalLeft.join('') === '111' || diagonalLeft.join('') === '222' || diagonalRight.join('') === '111' || diagonalRight.join('') === '222') {
        win++
        result = 'win'
        resultWin()
    } else {
        result = 'lost'
        resultWin()
    }

    for (let i = 0; i < 3; i++) {
        let row = board[i]
        let col = board.map((el) => el[i]);

        if (col.join('') === '111' || col.join('') === '222') {
            win++
            result = 'win'
            resultWin()
        } else if (row.join('') === '111' || row.join('') === '222') {
            win++
            result = 'win'
            resultWin()
        } else {
            result = 'lost'
            resultWin()
        }
    }
}

function resultWin() {
    if (win === 1) {
        getTransition()

        // console.log('win')
    } else {
        return false
    }
}

function getTransition() {
    document.querySelector('.skip__link').style.visibility = "hidden";

    // document.getElementById('skip__link').style.display = "none";
    skip.classList.add('transition');
    // document.getElementById('skip__link').style.visibility = "hidden";

    setTimeout(() => window.open('./portfolio.html', '_self'), 500)
}

function openPortfolioPageHandler(event) {
    if (event.target.classList.contains('skip__link')) {
        getTransition()
    }
}

const skip = document.querySelector('.skip')
skip.addEventListener('click', openPortfolioPageHandler);