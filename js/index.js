//* Створити на сторінці область для малювання з допомогою канвасу.
//* Дозволити користувачу малювати

const canvasBody = document.querySelector("#canvas");
const canvas = canvasBody.getContext("2d");

const opts = {
  radius: 10,
  color: "hsl(hue, 100%, 40%)",
};

let tick = 0;
let currentHue = 0;

let painting = 0;

canvasBody.addEventListener("mousedown", () => {
  painting = true;
});

canvasBody.addEventListener("mouseup", () => {
  painting = false;
});

canvasBody.addEventListener("mousemove", (e) => {
  if (painting) {
    const posX = e.offsetX;
    const posY = e.offsetY;
    tick += 1;
    if (!(tick % 3)) {
      if (currentHue !== 356) {
        currentHue += 1;
      } else {
        currentHue = 0;
      }
    }
    const currentColor = opts.color.replace("hue", currentHue);
    canvas.fillStyle = currentColor;
    canvas.beginPath();
    canvas.arc(posX, posY, opts.radius, 0, Math.PI * 2);
    canvas.fill();
  }
});
