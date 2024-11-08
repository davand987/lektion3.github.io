let todo = document.querySelector("#todo")
let add = document.querySelector("#add")
let todos = document.querySelector("#todos")
 
add.addEventListener("click", function(){
  if (todo.value === ""){
    alert("enter a todo")
    return
  }
  let li = document.createElement("li");

  let checkbox =document.createElement("input")
  checkbox.type ="checkbox"
  li.appendChild(checkbox)

  let text = document.createElement("span")
  text.innerText = todo.value;
  li.appendChild(text);
  todo.value = ""


  let del = document.createElement("button")
  del.innerText = "DELETE"
  li.appendChild(del)
  todos.appendChild(li)

  del.addEventListener("click", function(){
    li.remove();
  })
  checkbox.addEventListener("change", function(){
    if (checkbox.checked){
      text.style.textDecoration = "line-through"
      text.style.textDecorationColor = "red"
    }
    else{
      text.style.textDecoration = "none"
    }

  })
})
