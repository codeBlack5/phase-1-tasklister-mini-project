document.addEventListener("DOMContentLoaded", () => {
  let newForm = document.getElementById("create-task-form")
  newForm.addEventListener("submit", submitClick)
  let newList = document.getElementById("tasks")
  newList.addEventListener('click', deleteToDo)
})



function submitClick(event) {
  event.preventDefault()

  let newDescription = document.getElementById("new-task-description")
  let value = newDescription.value
  let newList = document.getElementById("tasks")
  let newLi = document.createElement('li')
  newLi.innerText = value
  newList.appendChild(newLi)


  let button = document.createElement("button")
  button.innerText = "d"
  newLi.append(button)
  newDescription.value = 'element created'


}


function deleteToDo(event) {
  console.log(event)
  event.target.parentElement.remove()
}