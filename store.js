// =============== ToDo Список Задач ===============

todoList = document.querySelector(".list")
todoForm = document.querySelector(".container-input")
todoInput = document.querySelector("#input")
AddButton = document.querySelector("#submit-btn")
todoAlert = document.querySelector(".alert")

todoForm.addEventListener("submit", formHandler)

function formHandler(event) {
    if (todoInput.value !== "") {

    // Чтобы Страница не перезагружалась при нажатии на кнопку
    event.preventDefault()

    // Получаем название задачи из инпута
    const taskText = todoInput.value

    // Создание тега <li>
    const newTask = `
        <li class="list-item"> ${taskText}
            <div class="buttons">
                <button class="delete-btn"></button>
                <button class="edit-btn"></button>
            </div>
        </li>`;

    // Добавляем Элемент на страницу
    todoList.innerHTML += newTask

    editBtn = document.querySelectorAll(".edit-btn")
    editBtn.forEach(element => element.addEventListener("click", editItem))

    deleteBtn = document.querySelectorAll(".delete-btn")
    deleteBtn.forEach(element => element.addEventListener("click", deleteItem))

    // Очищаем поле ввода
    todoInput.value = ""

    // Фокус на поле ввода, если нажали на кнопку
    todoInput.focus()
    }
    else return;
}

function deleteItem() {
    console.log(this.closest("li").remove())
}

function editItem() {

}
