📧 Shift-Click Checkbox Selection (Vanilla JavaScript)

A simple inbox-style UI that allows selecting multiple checkboxes by holding the Shift key, similar to Gmail. Built using pure HTML, CSS, and JavaScript — no libraries or frameworks.

✨ Features

✅ Click to select a single checkbox

⇧ Shift + Click to select a range

⇧ Shift + Uncheck to deselect a range

🔄 Works in both directions (top → bottom, bottom → top)

🧼 Clean, readable, bug-free logic

⚡ Vanilla JavaScript only

📂 Project Structure
.
├── index.html
├── style.css
├── script.js
└── README.md

🧠 How It Works

Stores the last clicked checkbox

When Shift is held:

Iterates through all checkboxes

Toggles a flag when start/end points are reached

Applies the current checkbox state to all in between

🧩 JavaScript Logic
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
    }
  });

  lastChecked = this;
}

checkBoxes.forEach((checkBox) => {
  checkBox.addEventListener("click", handleClick);
});

🚀 Getting Started

Clone the repo:

git clone https://github.com/mritunjay00111/shift-click-checkboxes.git

Open index.html in your browser

Hold Shift and click checkboxes 🎉

🛠️ Built With

HTML5

CSS3

JavaScript (ES6)

🎯 Learning Goals

DOM selection

Event handling

Keyboard modifiers (shiftKey)

State tracking without libraries

📌 Possible Improvements

Keyboard navigation support

Select-all checkbox

Mobile long-press selection

Animations
⚠️ Known Issue
Reverse Shift + Uncheck Edge Case

There is a known edge case when using Shift + click to uncheck in reverse direction.

Steps to reproduce

Click a checkbox to check it

Hold Shift and click a checkbox below it (range gets checked)

Hold Shift and click a checkbox above the last clicked one to uncheck

Current behavior

The range is mostly unchecked

The previously lastChecked checkbox may remain unchecked incorrectly

This happens due to the toggle-based inBetween logic relying on traversal order

Expected behavior

All checkboxes between the two selected points should consistently reflect the current checkbox state, regardless of direction

Status

Known limitation

Not fixed intentionally to keep the implementation simple and focused on core concepts

Notes

This issue can be resolved by switching to an index-based range calculation approach, which removes traversal-order dependency.
The current implementation is kept for educational purposes.
📜 License

This project is open source and free to use.
