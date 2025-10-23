window.addEventListener('load', () => {
  const canvas = document.getElementById("bubbleCanvas");
  const ctx = canvas.getContext("2d");
  let bubbles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  for (let i = 0; i < 60; i++) {
    bubbles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 5 + 1,
      dx: (Math.random() - 0.5) * 0.8,
      dy: (Math.random() - 0.5) * 0.8,
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bubbles.forEach((b) => {
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
      ctx.fill();
      b.x += b.dx;
      b.y += b.dy;
      if (b.x > canvas.width || b.x < 0) b.dx *= -1;
      if (b.y > canvas.height || b.y < 0) b.dy *= -1;
    });
    requestAnimationFrame(animate);
  }
  animate();
});
