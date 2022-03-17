document.getElementById("btn-bt4").addEventListener("click", function () {
  var n = 10;
  var s = "";
  for (var i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      s += `<div class='bg-red'>${i}</div>`;
    } else s += `<div class='bg-blue'>${i}</div>`;
  }
  document.getElementById("div-bt4").innerHTML = s;
  //   console.log(s);
});
