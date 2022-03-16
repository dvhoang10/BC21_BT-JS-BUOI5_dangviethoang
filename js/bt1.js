document.getElementById("btn-bt1").addEventListener("click", function () {
  var s = 0,
    n = 0;
  while (s < 10000) {
    n++;
    s += n;
  }
  document.getElementById("bt1-alert").style.display = "block";
  document.getElementById("bt1-alert").innerText = `Kết quả: ${n}`;
});
