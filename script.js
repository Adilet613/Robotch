// Обновлённый скрипт с новыми фичами
const robots = [
  // Spike Prime
  {
    name: "Spike Доставщик",
    platform: "spike",
    motors: 3,
    sensors: 2,
    video: "https://www.youtube.com/embed/0WFfVgnUDeE"
  },
  {
    name: "Spike Лабиринт бот",
    platform: "spike",
    motors: 2,
    sensors: 1,
    video: "https://www.youtube.com/embed/8UJquRZ9IgI"
  },
  {
    name: "Spike Роборука",
    platform: "spike",
    motors: 2,
    sensors: 2,
    video: "https://www.youtube.com/embed/kNIEOTpMy30"
  },

  // EV3
  {
    name: "EV3 Гусеничный",
    platform: "ev3",
    motors: 2,
    sensors: 1,
    video: "https://www.youtube.com/embed/vs_ZV2zwZp8"
  },
  {
    name: "EV3 Марсоход",
    platform: "ev3",
    motors: 3,
    sensors: 2,
    video: "https://www.youtube.com/embed/Aj1kZN9KAWw"
  },
  {
    name: "EV3 Уборщик",
    platform: "ev3",
    motors: 2,
    sensors: 0,
    video: "https://www.youtube.com/embed/AY8X_6jxz1k"
  },

  // Дополнительные
  {
    name: "Spike Танк",
    platform: "spike",
    motors: 4,
    sensors: 2,
    video: "https://www.youtube.com/embed/BDb4bQLwnCE"
  },
  {
    name: "EV3 Лифт",
    platform: "ev3",
    motors: 3,
    sensors: 3,
    video: "https://www.youtube.com/embed/oh5L4qz4Nbg"
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

  // Фильтрация роботов по платформе, моторам и датчикам
  const filtered = robots.filter(
    (r) => r.platform === platform && r.motors <= motors && r.sensors <= sensors
  );

  robotsContainer.innerHTML = "";

  // Если подходящих роботов нет
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
