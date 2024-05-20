let taskInput = document.querySelector("#taskInput");
let addTaskBtn = document.querySelector("#addTaskBtn");
let taskListContainer = document.querySelector("#taskList");

function removeTask(element) {
   element.parentNode.remove();
}
function toggleDoneTask(element) {
   element.classList.toggle("done");
}

addTaskBtn.addEventListener("click", () => {
   if (taskInput.value === "") {
      return;
   }
   let taskValue = taskInput.value;
   let li = document.createElement("li");
   li.innerHTML = `<p onclick = "toggleDoneTask(this)">${taskValue}</p>
   <span onclick = "removeTask(this)">x<span>`;
   taskListContainer.appendChild(li);
   taskInput.value = "";
});

