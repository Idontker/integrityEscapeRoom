// Elemente abrufen und deren inneren Text setzen
document.addEventListener("DOMContentLoaded", function () {
  let elementA = document.getElementById("pers1");
  let elementB = document.getElementById("desc");
  let elementC = document.getElementById("task");
  let elementD = document.getElementById("pers2");

  elementA.innerText = PERS1;
  elementB.innerText = CONTEXT;
  elementC.innerText = AUFGABE;
  elementD.innerText = PERS2;
  console.log("load done");
});
