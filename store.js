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

function addItem(e) {
    e.preventDefault();
    const value = input.value
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
        displayAlert("Item Added to the list", "correct")
        input.value = ""
        clearBtn.style.display = "flex-box"
        grocery.style.display = "block"
    }
    else if(value !== "" && editFlag) {
        
    }
    else {
        displayAlert("Please Enter Value", "wrong")
    }
}

function displayAlert(text, action) {
    alert.innerHTML = text
    alert.classList.add(`alert-${action}`)

    setTimeout(function() {
        alert.innerHTML = ""
        alert.classList.remove(`alert-${action}`)
    },1000)
}
