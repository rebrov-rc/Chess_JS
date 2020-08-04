// ////////////////////////////////////////////////////
"use strict";
let squers = [], counter = 0, checkFunc = true, variants = [],
rndmI;
for(let i=0;i<8;i++){
    squers[i] = [] 
    for(let iII = 0; iII < 8; iII++){
        squers[i].push(0)
    }
}
// 
const board = document.querySelector('.chess-wrap')
loadSquers(squers)
// ----
/////////////////////////////////////// I
function loadSquers(arr) {
    arr.forEach((element, l) => {
        element.forEach((item,i) =>{

            if((i + l)%2 === 1) {
                board.innerHTML  += `
                <div class=' squers black flex' data-x=${i} data-y=${l}></div>
            `
            }else {
                board.innerHTML  += `
                <div class=' squers flex' data-x=${i} data-y=${l}></div>
            `
            }
        })
    });
}
// ------------------------------------------------------------------------------
const sq = document.querySelectorAll('.squers')
sq.forEach((element , i) => {
    element.addEventListener('click', theHorse) 
    element.addEventListener('click',stepsVar)
}) 
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
/////////////////////////////////////// II
function theHorse (xIII,yIII) {
    let x,y; 
    if((xIII && yIII) >= 0 ){
        x = xIII
        y = yIII
    }else{
        x = this.dataset.x
        y = this.dataset.y 
    }    
    let ddd = document.querySelector(`.squers[data-x='${+x}'][data-y='${+y}']`)
    if (ddd.firstChild === null){
        ddd.innerHTML = `<div class='theHorse flex'>${++counter}</div>`
        console.log(counter);
    }else{
            
    }
}
// ----- the function for a few isues /
/////////////////////////////////////// III
function stepsVar(xII,yII, checkFunc) {
    let x,y;
    if((xII && yII) >= 0 ){
        x = xII
        y = yII
        
    }else{
        x = this.dataset.x
        y = this.dataset.y
    }

    let steps = [];
    if(+x + 2 < 8 && +y + 1 < 8 ){
        if (document.querySelector(`.squers[data-x='${+x + 2}'][data-y='${+y + 1}']`).firstChild === null){
            steps.push([ +x + 2, +y + 1])
        }
    }
    if(+x + 2 < 8 && +y - 1 >= 0 ){
        if (document.querySelector(`.squers[data-x='${+x + 2}'][data-y='${+y - 1}']`).firstChild === null){
            steps.push([ +x + 2, +y - 1])
        }
    }
    if(+x - 2 >= 0 && +y + 1 < 8 ){
        if (document.querySelector(`.squers[data-x='${+x - 2}'][data-y='${+y + 1}']`).firstChild === null){
            steps.push([ +x - 2, +y + 1])
        }
    }
    if(+x - 2 >= 0 && +y - 1 >= 0 ){
        if (document.querySelector(`.squers[data-x='${+x - 2}'][data-y='${+y - 1}']`).firstChild === null){
            steps.push([ +x - 2, +y - 1])
        }
    }
    // ---------------
    if(+x + 1 < 8 && +y + 2 < 8 ){
        if (document.querySelector(`.squers[data-x='${+x + 1}'][data-y='${+y + 2}']`).firstChild === null){
            steps.push([ +x + 1, +y + 2])
        }
    }
    if(+x + 1 < 8 && +y - 2 >= 0 ){
        if (document.querySelector(`.squers[data-x='${+x + 1}'][data-y='${+y - 2}']`).firstChild === null){
            steps.push([ +x + 1, +y - 2])
        }
    }
    if(+x - 1 >= 0 && +y + 2 < 8 ){
        if (document.querySelector(`.squers[data-x='${+x - 1}'][data-y='${+y + 2}']`).firstChild === null){
            steps.push([ +x - 1, +y + 2])
        }
    }
    if(+x - 1 >= 0 && +y - 2 >= 0 ){
        if (document.querySelector(`.squers[data-x='${+x - 1}'][data-y='${+y - 2}']`).firstChild === null){
            steps.push([ +x - 1, +y - 2])
        }
    }
    // ----------------------------
    if( checkFunc === true || checkFunc === undefined ){
        checking(steps)
    }else{
        variants.push(steps.length)
    }
    // if ( counter === 64 ) {alert('ПОБЕДА!!!!!!!!!!')}
}
// -----------------------------------------------------
// ---
/////////////////////////////////////// IV ++
function stepsCounter(steps){
    // choice less number = [i] from arraq
    variants = []
    steps.forEach((item, i) => {
        stepsVar(steps[i][0], steps[i][1], false)
    })
}
/////////////////////////////////////// V ++
function minNum(steps){
    rndmI = +Math.min.apply(null,variants) 
    variants.forEach((item,i) => {
        if(item === rndmI){
            rndmI = i
        }
    })
    checkComplite(steps)
}
/////////////////////////////////////// VI ++
function checkComplite(steps){
    let ddd = document.querySelector(`.squers[data-x='${steps[rndmI][0]}'][data-y='${steps[rndmI][1]}']`)
    if (ddd.firstChild != null){
        variants[rndmI] = 100
        minNum(steps)
    }
}
/////////////////////////////////////// VII
function checking(steps){
    stepsCounter(steps) 
    minNum(steps)
    // 
    checkFunc = true 
    setTimeout(() => {
        console.log(variants);
        theHorse(steps[rndmI][0], steps[rndmI][1])
        stepsVar(steps[rndmI][0], steps[rndmI][1], checkFunc)
    }, 100);
}
// ----------------------------------------------------------------