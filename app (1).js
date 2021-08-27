var millisec = 0;
var sec = 0;
var min = 0;

var displaymillisec = document.getElementById('displaymillisec')
var displaysec = document.getElementById('displaysec')
var displaymin = document.getElementById('displaymin')


// console.log(1)
// setTimeout(function(){
//     console.log(2)
// },1000)

// console.log()



// function time(){
//     console.log(1)
// }

// setInterval(time,2000)


// function foo(){
//     console.log(1)
// }

// setTimeout(foo,1000)

// setInterval(foo,1000)


function timer(){
    millisec++
    displaymillisec.innerHTML = millisec;
    if(millisec == 100){
        sec ++
        displaysec.innerHTML = sec;
        millisec = 0;

        if(sec == 60){
            min++
            displaymin.innerHTML  = min;
            sec = 0;
        }
    }
    console.log(millisec)
    console.log(sec)
    console.log(min)
}

var interval;


function start(){
    interval = setInterval(timer,10)
    document.getElementById('mybutton').disabled = true
    
}


function pause(){
    clearInterval(interval)
    document.getElementById('mybutton').disabled = false
}



function reset(){
    pause()
    millisec = 0
    sec = 0;
    min = 0;
    displaymillisec.innerHTML = millisec;
    displaysec.innerHTML = sec;
    displaymin.innerHTML  = min;
    document.getElementById('mybutton').disabled = false;
}

