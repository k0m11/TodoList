// =============== ToDo Список Задач ===============

todoList = document.querySelector(".list")
todoForm = document.querySelector(".container-input")
todoInput = document.querySelector("#input")
AddButton = document.querySelector("#submit-btn")

todoForm.addEventListener("submit", formHandler)

function formHandler(event) {
    // Чтобы Страница не перезагружалась при нажатии на кнопку
    event.preventDefault()

    // Получаем название задачи из инпута
    const taskText = todoInput.value

    // Создание тега <li> с помощью CreateElement
    const newTask = document.createElement("li")
    newTask.className = "list-item"
    newTask.innerHTML = taskText

    // Создание кнопки Удалить с помощью CreateElement
    const deleteBtn = document.createElement("button")
    deleteBtn.className = "delete-btn"
    deleteBtn.setAttribute("role", "button")
    newTask.append(deleteBtn)

    // Добавляем событие по клику
    
    deleteBtn.addEventListener("click", function () {
        this.closest("li").remove()
    })

    // Добавляем Элемент на страницу
    todoList.append(newTask)

    // Очищаем поле ввода
    todoInput.value = ""

    // Фокус на поле ввода, если нажали на кнопку
    todoInput.focus()
}
