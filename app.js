$(document).ready(function () {
    var _loop_1 = function(i) {
        $('#btn' + i.toString()).on('click', function () {
            doClick(i);
        });
    };
    for (var i = 0; i < 9; i++) {
        _loop_1(i);
    }
    var randomIdx = Math.floor(Math.random() * (ray.length - numberOfSteps));
    ray[randomIdx] = o;
    $('#btn' + randomIdx.toString()).val(o);
    numberOfSteps++;
});
var numberOfSteps = 0;
var ray = ['', '', '', '', '', '', '', '', ''];
var x = 'X';
var o = 'O';
var winComb = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
var btnClassStringDef = 'btn btn-default btn-block form-control';
var btnClassStringWin = 'btn btn-success btn-block form-control';
var btnClassStringLost = 'btn btn-danger btn-block form-control';
function doClick(i) {
    if (numberOfSteps < 9) {
        if (ray[i] == '') {
            ray[i] = x;
            $('#btn' + i.toString()).val(x);
            numberOfSteps++;
            checkWin(x);
        }
        var randomIdx = Math.floor(Math.random() * (ray.length - numberOfSteps));
        ray.forEach(function (el, i) {
            if ((el !== '') && (randomIdx >= i)) {
                randomIdx++;
            }
        });
        ray[randomIdx] = o;
        $('#btn' + randomIdx.toString()).val(o);
        if (numberOfSteps < 9) {
            checkWin(o);
        }
        numberOfSteps++;
    }
}
function checkWin(XorO) {
    for (var i = 0; i < 8; i++) {
        var isWin = true;
        for (var j = 0; j < 3; j++) {
            isWin = isWin && (ray[winComb[i][j]] == XorO);
        }
        if (isWin == true) {
            numberOfSteps = 9;
            if (XorO == 'X') {
                $('#display').html('Congratulations! You won! ' + '&#128522');
                for (var j = 0; j < 3; j++) {
                    $('#btn' + winComb[i][j].toString()).addClass(btnClassStringWin);
                }
            }
            else {
                $('#display').html('Sorry..You lost...' + '&#128542');
                for (var j = 0; j < 3; j++) {
                    $('#btn' + winComb[i][j].toString()).addClass(btnClassStringLost);
                }
            }
        }
    }
}
