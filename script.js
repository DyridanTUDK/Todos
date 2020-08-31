var uinput = document.getElementById("uinput");
var button = document.getElementById('enter');
var ul  = document.querySelector('ul');


function inputLength() {
    return uinput.value.length;
}


function type(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(uinput.value));
    ul.appendChild(li);
    uinput.value = ""

}

function addLiAfterClick(){
    if(inputLength() > 0){
        type();
    }
}

function addLiAfterEnter(){
    if(inputLength()> 0 && event.keyCode === 13){
        type()
    }
}

button.addEventListener('click', addLiAfterClick)      
 

uinput.addEventListener('keypress', addLiAfterEnter)