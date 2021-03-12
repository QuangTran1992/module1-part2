let result = document.getElementById("result");

function numberAction(number) {
  result.value += number;
}
function action(input) {
  result.value += input;
}
function action1(input) {
  result.value += input;
}

function equal() {
  let equal = eval(result.value);
  result.value = equal;
}
