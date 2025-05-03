const robots = [
  // Spike Prime
  {
    name: "Spike Доставщик",
    platform: "spike",
    motors: 3,
    sensors: 2,
    video: "https://www.youtube.com/embed/QyNQdG_6CGw" // Проверенная ссылка
  },
  {
    name: "Spike Лабиринт бот",
    platform: "spike",
    motors: 2,
    sensors: 1,
    video: "https://www.youtube.com/embed/9FQJ0UpAFCI" // Проверенная ссылка
  },
  {
    name: "Spike Роборука",
    platform: "spike",
    motors: 2,
    sensors: 2,
    video: "https://www.youtube.com/embed/ctf7YXitVXE" // Проверенная ссылка
  },

  // EV3
  {
    name: "EV3 Гусеничный",
    platform: "ev3",
    motors: 2,
    sensors: 1,
    video: "https://www.youtube.com/embed/IK_Rox0ajxo" // Проверенная ссылка
  },
  {
    name: "EV3 Марсоход",
    platform: "ev3",
    motors: 3,
    sensors: 2,
    video: "https://www.youtube.com/embed/gv4iG_UJRxI" // Проверенная ссылка
  },
  {
    name: "EV3 Уборщик",
    platform: "ev3",
    motors: 2,
    sensors: 0,
    video: "https://www.youtube.com/embed/9LPXqT-2tEc" // Проверенная ссылка
  },

  // Дополнительные
  {
    name: "Spike Танк",
    platform: "spike",
    motors: 4,
    sensors: 2,
    video: "https://www.youtube.com/embed/_EwpI7qJ5U8" // Проверенная ссылка
  },
  {
    name: "EV3 Лифт",
    platform: "ev3",
    motors: 3,
    sensors: 3,
    video: "https://www.youtube.com/embed/RdK80OpzodA" // Проверенная ссылка
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
