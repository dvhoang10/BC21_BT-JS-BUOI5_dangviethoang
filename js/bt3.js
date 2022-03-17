document.getElementById("btn-bt3").addEventListener("click", function () {
  var number = document.getElementById("txt-number").value * 1;
  var sum = 1,
    i = 1;
  while (i <= number) {
    sum *= i;
    i++;
  }
  document.getElementById("bt3-alert").style.display = "block";
  document.getElementById("bt3-alert").innerText = `Kết quả: ${sum}`;
});
