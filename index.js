const nameEl = document.getElementById("name");
const btnEl = document.getElementById("btn");
const deleteBtnEl = document.getElementById("delete-btn");
const list = document.getElementById("list");

let arr = [];
deleteBtnEl.addEventListener("click",deleteAll)

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addItem();
});

function addItem() {
  
  let name = nameEl.value;

if(name ==""){
  return;
}

  arr.push(name);
  list.innerHTML = "";
  console.log(arr);
   arr.map((item, index) => {
    list.innerHTML += `<li id="${index}">${item}  <button id="${index}" onclick="remove(${index})">delete</button></li> `;
    
  });


nameEl.value="";
}

function deleteAll(){
  
  arr = [];
  list.innerHTML=arr;
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
