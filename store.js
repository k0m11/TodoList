// 7:17:49


// ************ SELECT ITEMS ************
let alert = document.querySelector(".alert")
let grocery = document.querySelector(".list")
let input = document.querySelector("#input")
let submitBtn = document.querySelector("#submit-btn")
let clearBtn = document.querySelector("#clear-btn")

// edit option
let editElement;
let editFlag = false;
let editID = "";
// ************ EVENT LISTENERS ************
submitBtn.addEventListener("click", addItem)
clearBtn.addEventListener("click", clearAll)

function addItem(e) {
    e.preventDefault();
    let value = input.value
    value = valueDecor(value)
    const id = new Date().getTime().toString() // some kind of random numbers

    if(value !== "" && editFlag == false) {
        const element = document.createElement("article")
        element.classList.add("list-item")
        const attribute = document.createAttribute("data-id")
        attribute.value = id
        element.setAttributeNode(attribute)
        element.innerHTML = `
                <p class="title">${value}</p>
                <div class="btn-container">
                    <button type="button" class="edit-btn">
                    </button>
                    <button type="button" class="delete-btn">
                    </button>
                </div>
        `
        // append child
        grocery.appendChild(element)
        // item buttons
        const deleteBtn = document.querySelector(".delete-btn")
        const editBtn = document.querySelector(".edit-btn")

        deleteBtn.addEventListener("click", deleteItem)
        editBtn.addEventListener("click", editItem)

        displayAlert("Item Added to the list", "correct")
        setBackToDefault()
        clearBtn.style.display = "inline"
        grocery.style.display = "block"
        
    }
    else if(value !== "" && editFlag) {
        
    }
    else {
        displayAlert("Please Enter Value", "wrong")
    }
}

function addToLocalStorage(value, id) {

}

function displayAlert(text, action) {
    alert.innerHTML = text
    alert.classList.add(`alert-${action}`)

    setTimeout(function() {
        alert.innerHTML = ""
        alert.classList.remove(`alert-${action}`)
    },1000)
}

function setBackToDefault() {
    input.value = ""
    editFlag = false
    editID = ""
    submitBtn.innerHTML = "submit"
}

function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement
    grocery.removeChild(element)
    if(grocery.children.length === 0) {
        clearBtn.style.display = "none"
    }
    displayAlert("Item Removed", "wrong")
    setBackToDefault()
}

function editItem() {
}

function clearAll() {
    if(confirm("Clear All Items???")) {
        grocery.innerHTML = ""
        clearBtn.style.display = "none"
        displayAlert("Empty List", "wrong")
        setBackToDefault()
        // localStorage.removeItem("list")
    }
}

function valueDecor(x) {
    return x.split(" ").map((y)=> y[0].toUpperCase() + y.slice(1)).join(" ")
}
