const Priority = document.querySelector('#Priority');
const Category = document.querySelector("#Category");
const DueDate = document.querySelector("#DueDate");
const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const list = document.querySelector("#list");
const searchinput = document.querySelector("#searchinput");

searchinput.addEventListener("input", function() {

    let searchText = searchinput.value.toLowerCase();

    let tasks = list.querySelectorAll(".list");

    tasks.forEach(function(task) {

        let name = task.querySelector(".taskname").textContent.toLowerCase();

        if (name.includes(searchText)) {
            task.style.display = "";
        } else {
            task.style.display = "none";
        }

    });

});






const buttons = document.querySelectorAll(".filter");


buttons.forEach(button =>{
    button.addEventListener("click",()=>{
      
        buttons.forEach(btn =>{
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;
    

          const tasks = list.querySelectorAll(".list");

        tasks.forEach(task =>{

            if (filter === "all") {
                task.style.display = "flex";
                
            }

            else if (filter === "active"){
                if (task.dataset.status === "active") {
                    task.style.display = "flex";
                    
                }else{
                    task.style.display = "none";
                }
            }

            else if (filter === "completed"){
                if (task.dataset.status === "completed") {
                    task.style.display = "flex";
                    
                }else{
                    task.style.display = "none";
                }
            }

        });  
        
    });
});

const total = document.querySelector("#Total");
let Total = 0;

const Pending = document.querySelector("#Pending");
let pending = 0;

const Completed = document.querySelector("#Completed");
let completed = 0;


button.addEventListener("click",()=>{
    

    if (input.value === "") {
        alert("Please enter task");
        return;
    }

     let task = input.value;

     let li = document.createElement("li");
     li.classList.add("list");
     li.dataset.status = "active";
     
    
     let taskName = document.createElement("span");
     taskName.classList.add("taskname");
     taskName.textContent = task;

     let categorytext = document.createElement("span");
     
     let DueDatetext = document.createElement("span");

     let details= document.createElement("span");
     details.textContent = Category.value + " • " +(DueDate.value === "" ? "No date":DueDate.value);

     details.classList.add("task-details");

     let checkbox = document.createElement("input");
     checkbox.type = "checkbox";
     checkbox.classList.add("checkbox");

     li.appendChild(checkbox);

     checkbox.addEventListener("change",()=>{
       if(checkbox.checked){

           taskName.style.textDecoration = "line-through";
            taskName.style.color ="#aaa"; 

            li.dataset.status = "completed";
           
            pending--;
            Pending.textContent = pending;

            completed++;
            Completed.textContent = completed;
        }
        
        else{
            taskName.style.textDecoration = "none";
            taskName.style.color ="#212121";

             li.dataset.status = "active";

            pending++;
            Pending.textContent = pending;

            completed--;
            Completed.textContent = completed;
        }
        
     });
     

     let taskinfo = document.createElement("div");
     taskinfo.classList.add("task-info");


     let prioritytext = document.createElement("span");
     prioritytext.classList.add("priority");
     prioritytext.textContent = Priority.value;

     if (Priority.value === "High") {
      prioritytext.classList.add("high");
      
     } else if(Priority.value === "Medium"){
      prioritytext.classList.add("medium");
      
     }else if(Priority.value === "Low"){
      prioritytext.classList.add("low");

     }

     let Editbtn = document.createElement("button");
     
    Editbtn.classList.add("edit-btn");
    Editbtn.innerHTML = `<i class="fa-solid fa-pen"></i> Edit`;

     
     Editbtn.addEventListener("click",()=>{

       let text = prompt("Edit task",task);
    
       if (text!==null && text.trim()!=="") {
        task = text;
         taskName.textContent = text;
       }

     });

     
     let deletebtn = document.createElement("button");

     deletebtn.classList.add("delete-btn");
     deletebtn.innerHTML =`<i class="fa-solid fa-trash"></i>  Delete`;
   
    deletebtn.addEventListener("click",()=>{
         li.remove();
         Total = Total - 1;
        total.textContent = Total;

        pending = pending - 1;
        Pending.textContent = pending;

     });


     let actions = document.createElement("div");
     actions.classList.add("actions");

     Total = Total + 1;
     total.textContent = Total;

     pending = pending + 1;
     Pending.textContent = pending;


     
     li.appendChild(taskName);
     li.appendChild(taskinfo);
     li.appendChild(details);
     li.appendChild(prioritytext);
     li.appendChild(categorytext);
     li.appendChild(DueDatetext);
     li.appendChild(actions);
     li.appendChild(Editbtn);
     li.appendChild(deletebtn);

    
     taskinfo.appendChild(taskName);
     taskinfo.appendChild(details);
      
     actions.appendChild(Editbtn);
     actions.appendChild(deletebtn);

   
     

     list.appendChild(li);

     input.value = "";
    

});