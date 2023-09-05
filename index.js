const nameEl = document.getElementById("name");
const btnEl = document.getElementById("btn");
const list = document.getElementById("list");
let arr = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = nameEl.value;

  addItem(name);
});

function addItem(argument) {
  arr.push(argument);
  list.innerHTML = "";
  console.log(arr);
  arr.map((item, index) => {
    list.innerHTML += `<li id="${index}">${item}  <button id="${index}" onclick="remove(${index})">delete</button></li> `;
  });
}

function remove(e) {
 

  // Remove the item from the array
  arr.splice(e, 1);

  // Clear the list
  list.innerHTML = "";

  // Rebuild the list with the updated array
  arr.map((item, index) => {
    list.innerHTML += `
            <li id="${index}">
                ${item}
                <button id="${index}" onclick="remove(${index})">Delete</button>
            </li>
        `;
  });

}
