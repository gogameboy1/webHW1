function remove()
{
    var child = this.parentNode;
    var parent = document.getElementById("todos");
    parent.removeChild(child);
}

function markCir()
{

}

function add_enter()
{
    if(event.keyCode == 13)
    {
        var task = document.getElementById('task').value;

        var newItem = document.createElement("p");
        var button = document.createElement("BUTTON");
        var mark = document.createElement("BUTTON");
        mark.id = "mark";
        document.getElementById('todos').appendChild(newItem);
        newItem.innerHTML = task;
        newItem.appendChild(mark);
        newItem.appendChild(button);
        button.innerHTML = "remove";
        button.addEventListener("click" , remove);
        mark.addEventListener("click" , markCir);
        event.target.value = "";
    }
}



//document.getElementById('add').addEventListener('click', add);
document.getElementById("task").addEventListener("keydown" , add_enter);

//show(); 