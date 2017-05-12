'use strict';

var colors = ['red', 'green', 'blue', 'yellow', 'magenta', 'pink', 'cyan', 'orange', 'grey', 'black', 'lime', 'violet'];

function generateDivs() {
    var divsCount = prompt('Ввведите количество квадратов', 2),
        divsStep = 20,
        minDiv = 50,
        maxDiv = (divsCount - 1) * divsStep + minDiv,
        container = document.getElementsByClassName('container');

    for (var i = 0; i <= divsCount; i++) {
        var newDiv = document.createElement('div');
        newDiv.className = 'el' + i;
        newDiv.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        newDiv.style.width = maxDiv + 'px';
        newDiv.style.height = maxDiv + 'px';

        if (i) {
            var parent = document.querySelector('.el' + (i - 1));
            parent.appendChild(newDiv);
        } else {
            container[0].appendChild(newDiv);
        }
        maxDiv -= divsStep;
    }

    setInterval(function () {
        var countDivs = document.querySelectorAll('div');
        for (i = 1; i <= countDivs.length; i++) {
            countDivs[i].style.background = colors[Math.floor(Math.random() * colors.length)];
        }
    }, 1000);
}

window.addEventListener('load', generateDivs);