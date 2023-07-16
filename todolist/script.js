
// add list
document.getElementById('btn').onclick=function(){
if(document.querySelector('#input').value.length==0){
alert('please Add Todo');
}else{
    document.getElementById('list')
    document.getElementById('input')
            li=document.createElement('li')
            li.innerHTML=input.value;
            list.appendChild(li);
            let span=document.createElement('span');
            span.innerHTML='\u00d7';
            li.appendChild(span)
}
input.value=''
saveData();
};

//mark as completed and delete list
document.getElementById('list')
list.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
e.target.classList.toggle('checked');
saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentNode.remove();
        saveData();
    }
},false);

// save data into local storage
let saveData=()=>{
    localStorage.setItem('data',list.innerHTML)
}

let showTask=()=>{
list.innerHTML=localStorage.getItem('data');
}
showTask();

// filter items

function searchitem() {
    let filter = document.getElementById('searchinput').value.toUpperCase()
    // let ul=document.getElementById('list')
    let li = list.getElementsByTagName('li')
    for (var i = 0; i < li.length; i++) {
      let a = li[i][0]
      let textvalue = li[i].textContent || li[i].innerHTML
      if (textvalue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = ''
      } else {
        li[i].style.display = 'none';
      }
    }
  }