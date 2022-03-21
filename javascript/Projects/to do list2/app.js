const newEvent = document.querySelector(".add-event-input");
const addBtn   = document.querySelector(".add-btn");
const eventUl  = document.querySelector(".event-ul");
​
addBtn.addEventListener("click", ()=>{
    if (newEvent.value == ""){
        alert("Enter an event name");
    }
    else{
        // let eventText = newEvent.value;
        AddEvent(newEvent.value);
    }
});
​
eventUl.addEventListener("click", (e)=>{
    let item = e.target;
    
    if (item.classList.contains("fa-check-square")){
        item.parentElement.parentElement.classList.toggle("checked");
        item.classList.toggle("checked-icon");
        console.log(item);
    }
    else if (item.classList.contains("fa-trash")){
        item.parentElement.parentElement.remove();
    }
​
});
​
​
function AddEvent(eventText){
    let div = document.createElement("div");
    div.classList.add("event-div");
    eventUl.appendChild(div);
​
    let li = document.createElement("li");
    li.classList.add("event-li");
    li.innerText = eventText;
    div.appendChild(li);
​
    let checkBtn = document.createElement("button");
    checkBtn.classList.add("event-check-btn");
    checkBtn.innerHTML = "<i class='fas fa-check-square'></i>";
    div.appendChild(checkBtn);
​
    let trashBtn = document.createElement("button");
    trashBtn.classList.add("event-trash-btn");
    trashBtn.innerHTML = "<i class='fas fa-trash'></i>";
    div.appendChild(trashBtn);
​
    newEvent.value = "";
    newEvent.focus();
}