const robots = [
  // Spike Prime
  {
    name: "Spike Манипулятор",
    platform: "spike",
    motors: 3,
    sensors: 2,
    video: "https://www.youtube.com/embed/QBqDkT-Emiw"
  },
  {
    name: "Spike Погрузчик",
    platform: "spike",
    motors: 2,
    sensors: 1,
    video: "https://www.youtube.com/embed/kfBwBHTfzUM"
  },
  {
    name: "Spike Базовый бот",
    platform: "spike",
    motors: 2,
    sensors: 2,
    video: "https://www.youtube.com/embed/YwlWrEyGGso"
  },
  {
    name: "Spike Разведчик",
    platform: "spike",
    motors: 3,
    sensors: 1,
    video: "https://www.youtube.com/embed/m1P1x9bw5do"
  },
  {
    name: "Spike Гусеничный",
    platform: "spike",
    motors: 4,
    sensors: 2,
    video: "https://www.youtube.com/embed/Jf5U3wgUEM0"
  },

  // EV3
  {
    name: "EV3 Манипулятор",
    platform: "ev3",
    motors: 3,
    sensors: 2,
    video: "https://www.youtube.com/embed/iWsg0bT_Hzg"
  },
  {
    name: "EV3 Гусеничный",
    platform: "ev3",
    motors: 2,
    sensors: 1,
    video: "https://www.youtube.com/embed/J2LNupdl9gs"
  },
  {
    name: "EV3 Разведчик",
    platform: "ev3",
    motors: 3,
    sensors: 2,
    video: "https://www.youtube.com/embed/5jtiPpSScvI"
  },
  {
    name: "EV3 Базовый",
    platform: "ev3",
    motors: 2,
    sensors: 0,
    video: "https://www.youtube.com/embed/GrLvJvppM8M"
  },
  {
    name: "EV3 Лифт",
    platform: "ev3",
    motors: 3,
    sensors: 3,
    video: "https://www.youtube.com/embed/dfa4OLYecuU"
  }
];

const form = document.getElementById("robotForm");
const robotsContainer = document.getElementById("robotsContainer");
const toggleThemeBtn = document.getElementById("toggleTheme");

// Темная тема
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
}

toggleThemeBtn.addEventListener("click", () => {
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
