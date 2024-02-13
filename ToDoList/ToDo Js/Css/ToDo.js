let typein = document.getElementById('typein');
let listhere = document.getElementById('listhere');

function addit(){
    if(typein.value == ''){
        alert('Please enter a task first');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = typein.value;
        listhere.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
    typein.value = "";
    datasavekro();
}
listhere.addEventListener('click' , function(e){

    if(e.target.tagName == 'LI'){
        e.target.classList.toggle("checked");
        datasavekro();
    }
    else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
        datasavekro();
    }
});

function datasavekro(){
    localStorage.setItem("oyehoe" , listhere.innerHTML);
}
function showoldata(){
    listhere.innerHTML = localStorage.getItem("oyehoe");
}
showoldata();