let name="John";
let age=25;

let toDoList=[];
// function add(arr,item){
//     arr.push(item);
// }
// add(toDoList,"walk the dog");
// console.log(toDoList);
function addItem(arr){
    let answer=prompt("What do you like to do today?");
    let correct=answer.toLowerCase().trim();
    if(checkDuplicate(arr,correct)){
        arr.push(correct);
        showItems(toDoList);
    }else{
        alert("Item already exists")
    }
}

function checkDuplicate(arr,item){
    let exists=false;
    let index=arr.indexOf(item);
    if(index!=-1){
        exists=false;
    }
    else{
        exists=true;
    }
    return exists;
}

function removeItem(list){
    let answer=prompt("Which item do you want to delete");
    let correct=answer.toLowerCase().trim();
    let index=list.indexOf(correct);
    if(!checkDuplicate(list,correct)){
        let removedItem=list.splice(index,1);
        console.log(`Your removed item is "${removedItem}"`);
    }else{
        console.log("Item does not exist");
    }
    
    
}
function showItems(list){
    let listValues="Your items are: "
    for(let i=0;i<list.length;i++){
        listValues+=`"List item Nr ${i}:${list[i]}`;
    }
    alert(listValues);
}
addItem(toDoList);
addItem(toDoList);
addItem(toDoList);
removeItem(toDoList);
showItems(toDoList);



console.log(toDoList);