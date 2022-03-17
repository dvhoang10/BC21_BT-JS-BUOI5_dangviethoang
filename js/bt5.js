document.getElementById("btn-bt5").addEventListener("click", function () {
  var number = document.getElementById("txt-bt5").value * 1;
  var i = 1,
    s = "";
  while (i <= number) {
    s += `${i} `;
    i++;
  }
  document.getElementById("bt5-alert").style.display = "block";
  document.getElementById("bt5-alert").innerText = `Kết quả: ${s}`;
});
