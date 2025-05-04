// Тексерілген, жұмыс істейтін роботтармен скрипт
const robots = [
  {
    name: "Spike Prime Базовый Бот",
    platform: "spike",
    motors: 2,
    sensors: 1,
    video: "https://www.youtube.com/embed/QBqDkT-Emiw"
  },
  {
    name: "EV3 Базовый Марсоход",
    platform: "ev3",
    motors: 3,
    sensors: 2,
    video: "https://www.youtube.com/embed/iWsg0bT_Hzg"
  }
];

const form = document.getElementById("robotForm");
const robotsContainer = document.getElementById("robotsContainer");
const toggleThemeBtn = document.getElementById("toggleTheme");

if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
}

toggleThemeBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const platform = document.getElementById("platform").value;
  const motors = parseInt(document.getElementById("motors").value);
  const sensors = parseInt(document.getElementById("sensors").value);

  const filtered = robots.filter(
    (r) => r.platform === platform && r.motors <= motors && r.sensors <= sensors
  );

  robotsContainer.innerHTML = "";

  if (filtered.length === 0) {
    robotsContainer.innerHTML = "<p>❌ Подходящих роботов не найдено.</p>";
  } else {
    filtered.forEach((robot) => {
      const div = document.createElement("div");
      div.className = "robot-card";
      div.innerHTML = `
        <h3>${robot.name}</h3>
        <p>Моторов: ${robot.motors}, Сенсоров: ${robot.sensors}</p>
        <iframe width="100%" height="200" src="${robot.video}" frameborder="0" allowfullscreen></iframe>
      `;
      robotsContainer.appendChild(div);
    });
  }
});
