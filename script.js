const checkBoxes = document.querySelectorAll("input[type='checkbox']");

let lastChecked = null;

function handleClick(e) {
  if (!e.shiftKey || !lastChecked) {
    lastChecked = this;
    return;
  }

  let inBetween = false;

  checkBoxes.forEach((checkBox) => {
    if (checkBox === this || checkBox === lastChecked) {
      inBetween = !inBetween;
    }

    if (inBetween) {
      checkBox.checked = this.checked;
      lastChecked.checked = this.checked;
    }
  });

  lastChecked = this;
}

checkBoxes.forEach((checkBox) => {
  checkBox.addEventListener("click", handleClick);
});
