// console.log("Hello World");

const readline = require("readline");
const fs = require("fs");

// console.log(fs);

if (!fs.existsSync(__dirname + "/arr.json")) {
  console.log("File dont exists creating");
  fs.writeFileSync(__dirname + "/arr.json", "[]");
} else {
  console.log("File exist");
}

const arr = JSON.parse(fs.readFileSync(__dirname + "/arr.json", "utf-8"));

// for(let i = 0; i < 100; i++) {
//     arr.push({
//         val : i,
//         name : `Name ${i}`
//     });
// }
// console.log(arr);
// console.log(typeof arr);

// fs.writeFileSync(__dirname + "/arr.json", JSON.stringify(arr));
// console.log(__dirname)

const printTodo = () => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i].val + 1}. ${arr[i].name}`);
  }
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Welcome to CLI TODO \n 1. Add todo \n 2. View todo \n 3. Delete todo \n 4. Update todo",
  (ans) => {
    // console.log(ans);
    // console.log(typeof ans);
    switch (ans) {
      case "1":
        rl.question("Enter todo \n", (todo) => {
          arr.push({
            val: arr.length,
            name: todo,
          });
          fs.writeFileSync(__dirname + "/arr.json", JSON.stringify(arr));
          console.log(arr);
        });
        break;
      case "2":
        printTodo();
        break;
      case "3":
        rl.question("Enter todo number to delete \n", (todo) => {
          arr = arr.filter((ele, i) => i !== todo - 1);
          fs.writeFileSync(__dirname + "/arr.json", JSON.stringify(arr));
          console.log(arr);
        });
        break;
      case "4":
        rl.question("Enter todo number to update \n", (todo) => {
          rl.question("Enter new todo", (newTodo) => {
            arr[todo - 1].name = newTodo;
            fs.writeFileSync(__dirname + "/arr.json", JSON.stringify(arr));
            console.log(arr);
          });
        });
        break;
      default:
        console.log("Invalid Command");
        break;
    }
  }
);
