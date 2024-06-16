const fill = document.querySelector(".fill");
const emptyList = document.querySelectorAll(".empty");

// Add drag and drop event listeners
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// Loop through emptyList and add drag event listeners
emptyList.forEach((empty) => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});

// Handle drag start event
function dragStart() {
  this.classList.add("hold");
  setTimeout(() => this.classList.add("invisible"), 0);
}

// Handle drag end event
function dragEnd() {
  this.className = "fill";
}

// Handle drag over event
function dragOver(e) {
  e.preventDefault();
}

// Handle drag enter event
function dragEnter(e) {
  e.preventDefault();
  this.classList.add("boxHover");
}

// Handle drag leave event
function dragLeave() {
  this.classList.remove("boxHover");
}

// Handle drag and drop event
function dragDrop() {
  this.classList.remove("boxHover");
  this.appendChild(fill);
}
