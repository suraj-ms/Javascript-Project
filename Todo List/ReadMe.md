# ToDo List

### Develop with 2 approaches as follows
<ul>
  <li>With Array</li>
  <li>Without Array</li>
</ul>

## Common javascript code for both approaches

```Javascript
let todoItems = []
let myList = document.querySelector('.todoList');
let inpt_box = document.querySelector('.inpt_box');
let add_btn = document.querySelector(".add_btn")
let addListItem = document.querySelector(".addListItem");
let list_input_box = document.querySelector(".list_input_box");



inpt_box.addEventListener("keydown",function (event) {
    if (event.keyCode === 13) {
        if(myList.firstElementChild.textContent=="List is empty"){
            myList.innerHTML = "";
        }
        // todoItems.push(inpt_box.value)  //Activate only when app is using array list
        updateList()
        
    }
})
```

## First with Array

```javascript
function updateList() {
    inpt_box.value = "";
    myList.innerHTML = "";
    todoItems.forEach((item, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = item;
        myList.appendChild(listItem);
        listItem.addEventListener("click", () => {
            let childElements = myList.children;
            if (childElements.length == 1) {
                deleteItem(index);
                let empty = document.createElement("li");
                empty.textContent = "List is empty";
                myList.appendChild(empty);
            } else {
                deleteItem(index);
            }
        });
    });
}

function deleteItem(index) {
    todoItems.splice(index, 1);
    updateList();
}

```

## Second without Array

```javascript
function updateList() {
    let listItem = document.createElement("li");
    listItem.textContent = inpt_box.value;
    myList.appendChild(listItem);
    inpt_box.value = "";

    listItem.addEventListener("click", () => {
        let childElements = myList.children;
        if (childElements.length == 1) {
            listItem.remove();
            let empty = document.createElement("li");
            empty.textContent = "List is empty";
            myList.appendChild(empty);
        } else {
            listItem.remove();
        }
    });
}
```


