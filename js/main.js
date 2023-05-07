function showMore() {
  let paragraph = document.getElementById("more");
  let button = document.getElementById("btn");
  console.log(paragraph.style.display);
  if (paragraph.style.display === "block") {
    paragraph.style.display = "none";
    btn.innerHTML = "Read more";
  } else {
    paragraph.style.display = "block";
    btn.innerHTML = "Read less";
  }
}
function dropMenu() {
  let collapse = document.getElementById("collapse");
  let toggle = document.getElementById("toggle");
  let icon = document.getElementById("icon");

  if (!collapse.classList.contains("hidden")) {
    console.log("close");
    collapse.classList.add("hidden");
    icon.setAttribute("src", "./images/menu.png");
  } else {
    console.log("open");
    collapse.classList.remove("hidden");
    toggle.style.backgroundColor = "rgb(255, 242, 0)";
    icon.setAttribute("src", "./images/close.png");
  }
}
