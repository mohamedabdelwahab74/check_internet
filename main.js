let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');

window.onload = function () {
    if(window.navigator.onLine){
        onLine()
    }else{
        offLine()
    }
}

window.addEventListener("online", function(){
    onLine()
})
window.addEventListener("offLine", function(){
    offLine
})
reload.onclick = function(){
    window.location.reload(); 
}

function onLine() {
    title.innerHTML = 'online Now';
    title.style.color = 'green';
    ul.classList.add('hide');
    reload.classList.add('hide');
}

function offLine() {
    title.innerHTML = 'offline Now';
    title.style.color = 'red';
    ul.classList.remove('hide');
    reload.classList.remove('hide');

}