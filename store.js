// =============== ToDo Список Задач ===============

todoList = document.querySelector(".list")
todoForm = document.querySelector(".container-input")
todoInput = document.querySelector("#input")
AddButton = document.querySelector("#submit-btn")
todoAlert = document.querySelector(".alert")

todoForm.addEventListener("submit", formHandler)

function formHandler(event) {
    // Чтобы Страница не перезагружалась при нажатии на кнопку
    event.preventDefault()

    if (todoInput.value !== "") {
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

    // Выбираем все кнопки Редактирования и добавляем Событие
    editBtn = document.querySelectorAll(".edit-btn")
    editBtn.forEach(element => element.addEventListener("click", editItem))

    // Выбираем все кнопки Удаления и добавляем Событие
    deleteBtn = document.querySelectorAll(".delete-btn")
    deleteBtn.forEach(element => element.addEventListener("click", deleteItem))

    // Очищаем поле ввода
    todoInput.value = ""

    // Фокус на поле ввода, если нажали на кнопку
    todoInput.focus()

    // При окончании редактирования, меняем кнопку
    AddButton.innerHTML = "Submit"

    // Показываем Алёрт
    showAlert("Задача Добавлена", "green")
    if (AddButton.innerHTML == "Edit") showAlert("Задача Редактирована", "green")
    }
    else showAlert("Введите Задачу", "red")
}

// Удаление Задачи
function deleteItem() {
    this.closest("li").remove()
    showAlert("Задача Удалена", "red")
}

// Редактирование Задачи
function editItem() {
    todoInput.value = this.closest("li").innerText
    AddButton.innerHTML = "Edit"
    this.closest("li").remove()
}

// Показ Алерта
function showAlert(text, color) {
    todoAlert.style.visibility = "visible"
    todoAlert.className = "alert-" + color
    todoAlert.innerHTML = text

    // Задержка показа на 1.5 секунды, а потом исчезает
    setTimeout(function() {
        todoAlert.style.visibility = "hidden"
    },1000)
}


    
