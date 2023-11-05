let nameEl = document.getElementById("name");
const btnEl = document.getElementById("btn");
const deleteBtnEl = document.getElementById("delete-btn");

const list = document.getElementById("list");

deleteBtnEl.addEventListener("click", deleteAll);
let devMode = false;
form.addEventListener("submit", (e) => {
  e.preventDefault();

  addItem();
});

let arr = [];

function addItem() {
  if (devMode) {
    console.log("inside addItem " + devMode);
  }

  let name = nameEl.value;

  if (name === "") {
    return;
  }
  arr.push(name);
  list.innerHTML = "";
  outPutList();

  nameEl.value = "";
}
function outPutList() {
  console.log(arr);
  arr.map((item, index) => {
    list.innerHTML += `<li id="${index}">${item}  <button id="${index}" onclick="remove(${index})">delete</button>
    <button id="${index}" onclick="update(${index})">update</button></li> `;
  });
}

// Add the update function:
function update(id) {
  if (nameEl.value == "") {
    return;
  }

  // Get the current value of the input field
  let updatedName = nameEl.value;

  // Update the item in the array with the new value
  arr[id] = updatedName;

  // Clear the list
  list.innerHTML = "";

  // Rebuild the list with the updated array
  outPutList();

  // Clear the input field
  nameEl.value = "";

  // Optionally, set devMode back to false if needed
  devMode = false;
}

function deleteAll() {
  arr = [];
  list.innerHTML = arr;
}

function remove(e) {
  // Remove the item from the array
  arr.splice(e, 1);

  // Clear the list
  list.innerHTML = "";

  // Rebuild the list with the updated array
  outPutList();
}
