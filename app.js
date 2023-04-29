const result = document.getElementById("result");
const allBtns = document.querySelectorAll(".btn:not(.operator)");
const operations = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");

allBtns.forEach((btn) => btn.addEventListener("click", getNumber));
operations.forEach((operation) => operation.addEventListener("click", getOperation));
equal.addEventListener("click", calculateOperation);

function getNumber(e) {
  let displayNum = result.innerHTML == "0" ? "" : result.innerHTML;
  displayNum += e.target.innerHTML;
  //   console.log(displayNum);
  document.getElementById("result").innerHTML = displayNum.toString();
}

function getOperation(e) {
  let operation = e.target.innerHTML;
  let givenNum = result.innerHTML;
  switch (operation) {
    case "AC":
      givenNum = 0;
      break;
    case "+/-":
      givenNum = (givenNum * -1).toString();
      console.log(givenNum);
      result.innerHTML = givenNum;
      break;
    case "←":
      if (+result.innerHTML) {
        givenNum = givenNum.toString().slice(0, -1);
        document.getElementById("result").innerHTML = givenNum;
      }
      break;
    default:
      if (operation == "x") operation = "*";
      else if (operation == "÷") operation = "/";
      givenNum += operation.toString();
      break;
  }
  document.getElementById("result").innerHTML = givenNum.toString();
}

function calculateOperation(e) {
  let displayedOp = document.getElementById("result").innerHTML;
  let newresult = eval(displayedOp);
  if (!Number.isInteger(newresult)) newresult = newresult.toFixed(4);
  result.innerHTML = newresult;
}
