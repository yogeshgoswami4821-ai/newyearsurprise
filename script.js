/* 🎵 Music */
const music = document.getElementById("bgMusic");

/* 🧑 Personal Wish */
function startWish() {
  const name = document.getElementById("name").value || "Friend";
  document.getElementById("wish").style.display = "block";
  document.getElementById("shareBtn").style.display = "inline-block";
  document.getElementById("wish").innerHTML =
    `✨ Dear ${name}, may this New Year bring happiness, success and endless smiles 💖✨`;

  music.play();
}

/* ⏱️ Countdown */
const newYear = new Date("Jan 1, 2026 00:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const d = newYear - now;
  const days = Math.floor(d / (1000 * 60 * 60 * 24));
  const h = Math.floor((d / (1000 * 60 * 60)) % 24);
  const m = Math.floor((d / (1000 * 60)) % 60);
  const s = Math.floor((d / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `⏳ ${days}d ${h}h ${m}m ${s}s`;
}, 1000);

/* 📤 Share */
function shareWish() {
  const text = "🎉 Happy New Year! Wishing you joy & success 🎆";
  if (navigator.share) {
    navigator.share({ text });
  } else {
    navigator.clipboard.writeText(text);
    alert("Wish copied! Share anywhere ❤️");
  }
}

/* 🎆 Fireworks */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let fireworks = [];

function Firework() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height / 2;
  this.r = 2;
  this.life = 100;
  this.color = `hsl(${Math.random()*360},100%,60%)`;
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  if (Math.random() < 0.05) fireworks.push(new Firework());

  fireworks.forEach((f,i)=>{
    ctx.beginPath();
    ctx.arc(f.x,f.y,f.r,0,Math.PI*2);
    ctx.fillStyle = f.color;
    ctx.fill();
    f.life--;
    if(f.life<=0) fireworks.splice(i,1);
  });
  requestAnimationFrame(animate);
}
animate();
