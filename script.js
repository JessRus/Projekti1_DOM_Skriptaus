const inputBox = document.querySelector("#inputBox")
const listContainer = document.querySelector("#listContainer")


function addTask(){

    if(inputBox.value === ''){
        alert("Pakko kirjoittaa jotain! :)")

    } else {
        const newToDo = document.createElement("li");
        newToDo.textContent = inputBox.value;

        newToDo.addEventListener("click", function () {
        newToDo.classList.toggle("checked");
        });

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Poista"
        deleteButton.classList.add("deleteButton");

        deleteButton.onclick = function () {
            newToDo.remove();
        };

        newToDo.appendChild(deleteButton);
        listContainer.appendChild(newToDo);

        inputBox.value = "";
    }
}