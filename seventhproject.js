let lists=document.getElementsByClassName("list");
let rightBox=document.getElementById("right");
let leftBox=document.getElementById("left");
for(let list of lists){
  list.addEventListener("dragstart",function(p){
    let selected=p.target;
    rightBox.addEventListener("dragover",function(p){
        p.preventDefault();
    });
    rightBox.addEventListener("drop",function(p){
        rightBox.appendChild(selected);
        selected=null;
    });
    leftBox.addEventListener("dragover",function(p){
        p.preventDefault();
    });
    leftBox.addEventListener("drop",function(p){
        leftBox.appendChild(selected);
        selected=null;
    })
  })
}
