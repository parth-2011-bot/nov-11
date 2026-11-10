// EDIT THESE MESSAGES to personalize the website.
const CONFIG = {
  recipient: "SHORT-Y",
  everydaySecretTitle: "THE GEAR WAS A BUTTON?",
  everydaySecret: "Congratulations. You have discovered a highly classified button.",
  birthdaySecretTitle: "THE MOST IMPORTANT MECHANISM",
  birthdaySecret: "Happy birthday, Palak!! May your year be full of excellent plot twists, loud laughter, lovely surprises and absolutely legendary memories. Keep being wonderfully you."
};

const screens = [...document.querySelectorAll(".screen")];
function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle("active", screen.id === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}
document.getElementById("startBtn").addEventListener("click", () => showScreen("screen2"));
document.getElementById("toLetterBtn").addEventListener("click", () => showScreen("screen3"));
document.getElementById("backBtn").addEventListener("click", () => showScreen("screen2"));

const target = new Date("2026-11-20T00:00:00+05:30").getTime();
const pad = n => String(n).padStart(2, "0");
function updateCountdown() {
  const diff = target - Date.now();
  if (diff <= 0) {
    ["days","hours","minutes","seconds"].forEach(id => document.getElementById(id).textContent = "00");
    document.getElementById("status").textContent = "THE MOMENT HAS ARRIVED";
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  document.getElementById("days").textContent = pad(days);
  document.getElementById("hours").textContent = pad(hours);
  document.getElementById("minutes").textContent = pad(minutes);
  document.getElementById("seconds").textContent = pad(seconds);
  document.getElementById("status").textContent = "ENGINE RUNNING · IST";
}
updateCountdown();
setInterval(updateCountdown, 1000);

const modal = document.getElementById("secretModal");
function openSecret(title, message) {
  document.getElementById("secretTitle").textContent = title;
  document.getElementById("secretText").textContent = message;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}
function closeSecret() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}
document.getElementById("secretBtn").addEventListener("click", () => openSecret(CONFIG.everydaySecretTitle, CONFIG.everydaySecret));
document.getElementById("closeSecret").addEventListener("click", closeSecret);
modal.addEventListener("click", e => { if (e.target === modal) closeSecret(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeSecret(); });

const birthdayOverlay = document.getElementById("birthdayOverlay");
const birthdayStart = new Date("2026-11-20T00:00:00+05:30").getTime();
const birthdayEnd = new Date("2026-11-21T00:00:00+05:30").getTime();
let birthdayShown = false;
function checkBirthdayMode() {
  const now = Date.now();
  if (now >= birthdayStart && now < birthdayEnd && !birthdayShown) {
    birthdayShown = true;
    birthdayOverlay.classList.add("open");
    birthdayOverlay.setAttribute("aria-hidden", "false");
    const confetti = document.getElementById("confetti");
    for (let i = 0; i < 75; i++) {
      const piece = document.createElement("i");
      piece.style.left = Math.random() * 100 + "%";
      piece.style.animationDelay = Math.random() * 3 + "s";
      piece.style.animationDuration = 3 + Math.random() * 3 + "s";
      confetti.appendChild(piece);
    }
  }
}
document.getElementById("birthdaySecretBtn").addEventListener("click", () => {
  birthdayOverlay.classList.remove("open");
  birthdayOverlay.setAttribute("aria-hidden", "true");
  openSecret(CONFIG.birthdaySecretTitle, CONFIG.birthdaySecret);
});
checkBirthdayMode();
setInterval(checkBirthdayMode, 30000);

// Personalize the recipient's name in the browser title and letter heading.
document.title = `The Clockwork Chronicles — For ${CONFIG.recipient}`;
