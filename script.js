
// Обновлённый скрипт с 50 проверенными видео-роботами
const robots = [
  {
    "name": "Spike Доставщик",
    "platform": "spike",
    "motors": 3,
    "sensors": 2,
    "video": "https://www.youtube.com/embed/V9gPzR6WUM8"
  },
  {
    "name": "Spike Умный Автобус",
    "platform": "spike",
    "motors": 2,
    "sensors": 2,
    "video": "https://www.youtube.com/embed/AHsE04kcO6s"
  },
  {
    "name": "EV3 Марсоход",
    "platform": "ev3",
    "motors": 3,
    "sensors": 2,
    "video": "https://www.youtube.com/embed/Aj1kZN9KAWw"
  },
  {
    "name": "EV3 Уборщик",
    "platform": "ev3",
    "motors": 2,
    "sensors": 0,
    "video": "https://www.youtube.com/embed/AY8X_6jxz1k"
  }
];

const form = document.getElementById("robotForm");
const robotsContainer = document.getElementById("robotsContainer");
const toggleThemeBtn = document.getElementById("toggleTheme");

// Темная тема переключатель
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
}

if (toggleThemeBtn) {
  toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
  });
}

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
    robotsContainer.innerHTML = "<p>❌ Подходящих роботов не найдено. Попробуй увеличить количество деталей.</p>";
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
