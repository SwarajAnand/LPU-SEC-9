console.log("Working");

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const container = document.getElementById("container");

let arr = [];

btn.addEventListener("click", () => {
  let todoObject = {
    id: Date.now(),
    value: input.value,
  };

  arr.push(todoObject);
  console.log(arr);

  showTodo();

  // const todo = input.value;
  // const todoCard = `<div class="todo">${todo}</div>`;
  // container.innerHTML += todoCard;
  input.value = "";
});

const deleteTodoId = (id) => {
  console.log(id);
  arr.splice(id, 1);
  // showTodo();

  // arr = arr.filter((ele, i) => {
  // return i !== id;

  // if(i === id) {

  // }else{
  //     return ele;
  // }
  // })
  showTodo();
};

const updateTodoId = (idx) => {
  input.value = arr[idx].value;
  deleteTodoId(idx);
};

const showTodo = () => {
  container.innerHTML = "";
  arr.map((ele, i) => {
    const todoCard = `<div class="todo">
                            <button onclick="updateTodoId(${i})">Update TODO</button>
                            <span>${ele.value}</span>
                            <button class="delete" onclick="deleteTodoId(${i})">Delete</button>
                            </div>`;
    container.innerHTML += todoCard;
  });
};

// API CALLS FOR DAY 2

const apiLink =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

// fetch(apiLink)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.results);
//   });


async function apiDataCall() {
  const jData = await fetch(apiLink);
  const data = await jData.json();
  console.log(data.results);
}

// apiDataCall();

// CLOUSERS 


function f1 () {
    let x = 10;
    
    function f2 () {
        x += 10;
        console.log(x);
    }
    return f2
}

const a = f1();
const b = f1();

a();
a();    
a();
b();
