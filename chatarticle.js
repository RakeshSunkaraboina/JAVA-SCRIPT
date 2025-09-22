// Function to change article background color
function changeBg(button) {
  const colors = ["#fff", "#ffe4b5", "#d1f7c4", "#f7d6d0", "#d6e0f0"];
  const card = button.parentElement;
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  card.style.backgroundColor = randomColor;
}
