const robots = [
  {
    name: "Red Light Green Light Robot",
    platform: "ev3",
    motors: 2,
    sensors: 1,
    video: "https://www.youtube.com/embed/DSsbGJMSnT8"
  },
  {
    name: "TicTacToe Playing Robot",
    platform: "ev3",
    motors: 3,
    sensors: 1,
    video: "https://www.youtube.com/embed/aRFfXCBDIaE"
  },
  {
    name: "Xdozer Transforming Robot",
    platform: "ev3",
    motors: 4,
    sensors: 2,
    video: "https://www.youtube.com/embed/Y_91vgpbsmY"
  },
  {
    name: "EV3 Drawbot",
    platform: "ev3",
    motors: 2,
    sensors: 0,
    video: "https://www.youtube.com/embed/6xCd55oSgO4"
  },
  {
    name: "EV3 Rover Bot",
    platform: "ev3",
    motors: 3,
    sensors: 2,
    video: "https://www.youtube.com/embed/b82TL2TUYiE"
  },
  {
    name: "Soccer Robot",
    platform: "spike",
    motors: 3,
    sensors: 1,
    video: "https://www.youtube.com/embed/DlUfssziXDQ"
  },
  {
    name: "Manipulator Arm",
    platform: "spike",
    motors: 2,
    sensors: 2,
    video: "https://www.youtube.com/embed/Rw_Q9j-lA78"
  },
  {
    name: "Rubik's Cube Solver (Primecuber)",
    platform: "spike",
    motors: 3,
    sensors: 1,
    video: "https://www.youtube.com/embed/4PlHQtcdYII"
  },
  {
    name: "Color Plotting Rover",
    platform: "spike",
    motors: 2,
    sensors: 1,
    video: "https://www.youtube.com/embed/GOkpHxyRYTg"
  },
  {
    name: "Spike Prime Getting Started",
    platform: "spike",
    motors: 2,
    sensors: 1,
    video: "https://www.youtube.com/embed/DtYW2kzejdY"
  }
];

const form = document.getElementById("robotForm");
const container = document.getElementById("robotsContainer");
const toggleThemeBtn = document.getElementById("toggleTheme");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const motors = parseInt(document.getElementById("motors").value);
  const sensors = parseInt(document.getElementById("sensors").value);
  const platform = document.getElementById("platform").value;

  const matched = robots.filter(robot =>
    robot.motors <= motors &&
    robot.sensors <= sensors &&
    robot.platform === platform
  );

  container.innerHTML = "";

  if (matched.length === 0) {
    container.innerHTML = "<p class='no-match'>Роботы не найдены. Попробуйте изменить параметры.</p>";
    return;
  }

  matched.forEach(robot => {
    const card = document.createElement("div");
    card.className = "robot-card";
    card.innerHTML = `
      <h3>${robot.name}</h3>
      <iframe
        width="320"
        height="180"
        src="${robot.video}"
        title="${robot.name}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `;
    container.appendChild(card);
  });
});

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
