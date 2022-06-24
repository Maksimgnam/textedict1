let place   = document.getElementById('place');
let area = document.getElementById('area');
let add = document.getElementById('add');

let speedview = document.getElementById('speedview');

let speedReading = 1000;
speedview.innerText = speedReading;
add.onclick  =  () =>  {
    formTrigger(1)
 let txt = area.value;
 let arr = clear(txt.split(' '))
 let n = 0
 let x = setInterval(function(){
     place.innerHTML = arr[n]
     if (n<=arr.length-1){
         n++;
     } else{
         clearInterval(x)
         place.innerHTML = '';
         formTrigger(0);

     }
 },speedReading)




    
}
function clear(arr){
    let clearArr = [];
    for(let i = 0; i<arr.length; i++) {
        if(arr[i]!== '' ){
            clearArr.push(arr[i])
        }
    }
    return clearArr;
}
function formTrigger(state) {
    if(state == 1){
        place.style.display = 'flex'
        add.style.display = 'none'
        area.style.display = 'none'
        speed.style.display = 'none'
    speedview.style.display = 'none'
    }
    else if(state == 0){
        place.style.display = 'none'
        add.style.display = 'block'
        area.style.display = 'block'
        speed.style.display = 'block'
        speedview.style.display = 'block'

    }
    
}
function  nightTrigger(state){
    if(state === 1){
        wrap.style.backgroundColor = "#fff"
        area.style.backgroundColor = "#fff"
        area.style.border = "1px solid #333"
        area.style.color = "#333"
        add.style.color = "#333"
        add.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        area.style.border = "1px solid #333"
        speedview.style.color = "#fff"
        place.style.color = "#333"
    }else if (state == 0){
        wrap.style.backgroundColor = "#333"
        area.style.backgroundColor = "#000"
        area.style.border = "none"
        area.style.color = "#fff"
        add.style.color = "#bbb"
        add.style.backgroundColor = "#000"
        area.style.border = "none"
        speedview.style.color = "#fff"
        place.style.color = "#fff"

    } 
}
let state = 0;
nightmode.onclick = function (){
    if(state === 0){
        nightTrigger(1);
        state = 1;
    } else{
        nightTrigger(0);
        state = 0;

    } 
    
        
    }







speed.onchange = function () {
    speedview.innerHTML = speed.value;
    speedReading = speed.value;


}
function setFocus(word) {
    if(word.length %2===0){
        let focusIndex = (word.length/2)-1;
        console.log(word[focusIndex])
        word.style.backgroundColor = '#333'

    } else{
        let focusIndex =((word.length+1)/2)-1;
        console.log(word[focusIndex])



    }
    
}
setFocus('abdfghdr')
setFocus('asdff')



