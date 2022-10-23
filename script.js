var turn = true;
var blocks = [];

function reset(A, B, C) {
    document.getElementById('b' + A).style.color = '#456170';
    document.getElementById('b' + B).style.color = '#456170';
    document.getElementById('b' + C).style.color = '#456170';
    setTimeout(function(){
        location.reload();
    }, 3500);
}

function checkwinner() {
    for(var i = 1; i<= 9; i++) {
        blocks[i] = document.getElementById('b' + i).innerHTML;
    }

    //check horizontal
    if(blocks[1] == blocks[2] && blocks[2] == blocks[3] && blocks[1]!= "") {
        reset(1, 2, 3);
        alert('Player: ' + blocks[1] + ' Wins');
    }
    if(blocks[4] == blocks[5] && blocks[5] == blocks[6] && blocks[4]!= "") {
        reset(4, 5, 6);
        alert('Player: ' + blocks[4] + ' Wins');
    }
    if(blocks[7] == blocks[8] && blocks[8] == blocks[9] && blocks[7]!= "") {
        reset(7, 8, 9);
        alert('Player: ' + blocks[7] + ' Wins');
    }
    //check vertical
    if(blocks[1] == blocks[4] && blocks[4] == blocks[7] && blocks[1]!= "") {
        reset(1, 4, 7);
        alert('Player: ' + blocks[1] + ' Wins');
    }
    if(blocks[2] == blocks[5] && blocks[5] == blocks[8] && blocks[2]!= "") {
        reset(2, 5, 7);
        alert('Player: ' + blocks[2] + ' Wins');
    }
    if(blocks[3] == blocks[6] && blocks[6] == blocks[9] && blocks[3]!= "") {
        reset(3, 6, 9);
        alert('Player: ' + blocks[3] + ' Wins');
    }
    //check diagonally
    if(blocks[1] == blocks[5] && blocks[5] == blocks[9] && blocks[1]!= "") {
        reset(1, 5, 9);
        alert('Player: ' + blocks[1] + ' Wins');
    }
    if(blocks[3] == blocks[5] && blocks[5] == blocks[7] && blocks[3]!= "") {
        reset(3, 5, 7);
        alert('Player: ' + blocks[3] + ' Wins');
    }
}

function insert(id) {
    var b = document.getElementById(id);
    if(turn && b.innerHTML == "") {
        b.innerHTML = "X";
        console.log("X");
        turn = !turn;
    } else if(b.innerHTML == "") {
        b.innerHTML = "O";
        console.log("O");
        turn = !turn;
    }
    checkwinner();
}