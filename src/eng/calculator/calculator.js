function appendOperation(operation) {
  document.getElementById("resultArea").innerHTML += operation;
}
function calculatResult() {
  let container = document.getElementById("resultArea");
  let result = eval(container.innerHTML);
  container.innerHTML = result;
}
function deleteLast() {
  let container = document.getElementById("resultArea");
  if (container.innerHTML.endsWith(" ")) {
    container.innerHTML = container.innerHTML.slice(0, -3);
  } else {
    container.innerHTML = container.innerHTML.slice(0, -1);
  }
}
//MoinJulian
function deleteAll() {
  let container = document.getElementById("resultArea");
  if (container.innerHTML.endsWith(" ")) {
    container.innerHTML = container.innerHTML.slice(0, -Infinity);
  } else {
    container.innerHTML = container.innerHTML.slice(0, -Infinity);
  }
}
addEventListener("keydown", (e) => {
  switch (e.key) {
    case "1":
      appendOperation(1);
      break;
    case "2":
      appendOperation(2);
      break;
    case "3":
      appendOperation(3);
      break;
    case "4":
      appendOperation(4);
      break;
    case "5":
      appendOperation(5);
      break;
    case "6":
      appendOperation(6);
      break;
    case "7":
      appendOperation(7);
      break;
    case "8":
      appendOperation(8);
      break;
    case "9":
      appendOperation(9);
      break;
    case "0":
      appendOperation(0);
      break;
    case "/":
      appendOperation("/");
      break;
    case "*":
      appendOperation("*");
      break;
    case "+":
      appendOperation("+");
      break;
    case "-":
      appendOperation("-");
      break;
    case ".":
      appendOperation(".");
      break;
    case "(":
      appendOperation("(");
      break;
    case ")":
      appendOperation(")");
      break;
    case " ":
      calculatResult();
      break;
    case "d":
      deleteLast();
      break;
    case "a":
      deleteAll();
      break;
  }
  addEventListener("submit", () => {
    calculatResult();
  })
});
