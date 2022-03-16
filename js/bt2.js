function sumExponential(x, n) {
  var sum = 0;
  for (i = 1; i <= n; i++) {
    sum += Math.pow(x, i);
  }
  document.getElementById("bt2-alert").style.display = "block";
  document.getElementById("bt2-alert").innerText = `Kết quả: ${sum}`;
}

document.getElementById("btn-bt2").addEventListener("click", function () {
  var x = document.getElementsByName("array2[]");
  var data = [];
  for (var i = 0; i < x.length; i++) {
    data[i] = x[i].value * 1;
  }

  var s = data[0];
  var n = data[1];
  sumExponential(s, n);
});
