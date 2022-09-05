//1
document.addEventListener('DOMContentLoaded', onDomReady);

// let number=[92,33,12,492]
// console.log(number);
 
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
    onDomReady();
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

function onDomReady() {
    var amount = document.getElementById('amount');
    (function iterate(i) {
        amount.innerHTML = i + "";
        if (i < 92) {
            setTimeout(function() { iterate(i + 1); }, 10);
        }
    })(0);
}




//2
document.addEventListener('DOMContentLoaded', onDomReady1);

let last_known_scroll_position1 = 0;
let ticking1 = false;

function doSomething1(scroll_pos) {
    onDomReady1();
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position1 = window.scrollY;

  if (!ticking1) {
    window.requestAnimationFrame(function() {
      doSomething1(last_known_scroll_position1);
      ticking1 = false;
    });

    ticking1 = true;
  }
});

function onDomReady1() {
    var amount1 = document.getElementById('amount1');
    (function iterate(i) {
        amount1.innerHTML = i + "";
        if (i < 33) {
            setTimeout(function() { iterate(i + 1); }, 10);
        }
    })(0);
}


//3
document.addEventListener('DOMContentLoaded', onDomReady2);

let last_known_scroll_position2 = 0;
let ticking2 = false;

function doSomething2(scroll_pos) {
    onDomReady2();
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position2 = window.scrollY;

  if (!ticking2) {
    window.requestAnimationFrame(function() {
      doSomething2(last_known_scroll_position2);
      ticking2 = false;
    });

    ticking2 = true;
  }
});

function onDomReady2() {
    var amount2 = document.getElementById('amount2');
    (function iterate(i) {
        amount2.innerHTML = i + "";
        if (i < 12) {
            setTimeout(function() { iterate(i + 1); }, 10);
        }
    })(0);
}


//3
document.addEventListener('DOMContentLoaded', onDomReady3);

let last_known_scroll_position3 = 0;
let ticking3 = false;

function doSomething3(scroll_pos) {
    onDomReady3();
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position3 = window.scrollY;

  if (!ticking3) {
    window.requestAnimationFrame(function() {
      doSomething3(last_known_scroll_position3);
      ticking3 = false;
    });

    ticking3 = true;
  }
});

function onDomReady3() {
    var amount3 = document.getElementById('amount3');
    (function iterate(i) {
        amount3.innerHTML = i + "";
        if (i < 150) {
            setTimeout(function() { iterate(i + 1); }, 10);
        }
    })(0);
}











// function onDomReady() {
//     var amount = document.getElementById('amount');
//     for (let j = 0; j <number.length ; j++) {
//         (function iterate(b) {
//             amount.innerHTML = b + "";
//             if (b < num[j]) {
//                 setTimeout(function() { iterate(b + 1); }, 10);
//             }
//         })(0);
//         j++;
//     }
// }