const item = document.querySelector("#item");
const todobox = document.querySelector("#to-do-box");

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addTodo(this.value);
    this.value = " ";
  }
});
const addTodo = (item) => {
  const listitem = document.createElement("li");
  listitem.innerHTML = ` ${item} </i> <i class="fas fa-times">`;
  // console.log(listitem);
  listitem.addEventListener("click", function () {
    this.classList.toggle("done");
  });
  listitem.querySelector("i").addEventListener("click", function () {
    listitem.remove();
  });
  todobox.appendChild(listitem);
};
