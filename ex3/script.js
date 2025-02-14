    
    
    const first = document.getElementById("name");
    const second = document.getElementById("content");
    const add = document.getElementById("add");

    
    function addTodoItem() {
        const name = first.value.trim();
        const content = second.value.trim();
        
        if (name === "" || content === "")
             return;

        const li = document.createElement("li");
        li.innerHTML = `${name} : ${content} `;
        const re = document.createElement("button");
        re.innerHTML = "🗑️";

        
        // this is to remove what we wrote after aadding the list
        first.value = "";
        second.value = "";


        function remove() {
            li.remove();
        }
        re.addEventListener("click", remove);
        todoList.appendChild(li);
        li.appendChild(re);
    
    }
    

