const checkBoxes = Array.from(document.querySelectorAll("input[type='checkbox']"));

let lastCheckedIndex = null;

function handleClick(e) {
  const currentIndex = checkBoxes.indexOf(this);

  if (!e.shiftKey || lastCheckedIndex === null) {
    lastCheckedIndex = currentIndex;
    return;
  }

  const start = Math.min(lastCheckedIndex, currentIndex);
  const end = Math.max(lastCheckedIndex, currentIndex);

  for (let i = start; i <= end; i++) {
    checkBoxes[i].checked = this.checked;
  }

  lastCheckedIndex = currentIndex;
}

checkBoxes.forEach((checkBox) => {
  checkBox.addEventListener("click", handleClick);
});
