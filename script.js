let yourName = "Braxton Allen"

let gb = 0 
let cc = 0  
let sugar = 0 

let allgb = document.getElementById("qty-gb")
let allcc= document.getElementById('qty-cc')
let allsugar= document.getElementById('qty-sugar')
var total = document.getElementById("qty-total")

document.getElementById('credit').textContent = `Created by Braxton Allen`

document.getElementById('add-gb').addEventListener('click', function() {   
    if (gb >= 0){
    gb++
    
    allgb.textContent = gb ;
    total.textContent = gb + cc + sugar;

    }
})

document.getElementById('minus-gb').addEventListener('click', function() {
    if(gb > 0){
    gb--

    allgb.textContent = gb;
    total.textContent = gb + cc + sugar;

    } 
})

document.getElementById('add-cc').addEventListener('click', function() {
    cc++
    allcc.textContent = cc
    total.textContent = gb + cc + sugar
})

document.getElementById('minus-cc').addEventListener('click', function() {
    if(cc > 0){
        cc--
    
    allcc.textContent = cc
    total.textContent = gb + cc + sugar
    }
})

document.getElementById('add-sugar').addEventListener('click', function() {
    sugar++
  
    allsugar.textContent = sugar;
    total.textContent = gb + cc + sugar


})

document.getElementById('minus-sugar').addEventListener('click', function() {
    if(sugar > 0){
        sugar--
    
    allsugar.textContent = sugar
    total.textContent = gb + cc + sugar
    }
})

document.getElementById("qty-total").textContent = total

