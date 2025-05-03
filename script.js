const robots = [
  {
    name: "3ASY Bot",
    platform: "ev3",
    motors: 2,
    sensors: 1,
    video: "https://www.youtube.com/embed/J7KJbs5sSEE"
  },
  {
    name: "football Robot",
    platform: "ev3",
    motors: 3,
    sensors: 1,
    video: "https://youtu.be/5jtiPpSScvI?si=1wvBylnlutJDvw6N"
  },
  {
    name: "Line Follower",
    platform: "ev3",
    motors: 2,
    sensors: 2,
    video: "https://www.youtube.com/embed/3EuQk_5YVuA"
  },
  {
    name: "Gymnast",
    platform: "spike",
    motors: 2,
    sensors: 2,
    video: "https://www.youtube.com/embed/YwlWrEyGGso"
  },
  {
    name: "Speedbot",
    platform: "spike",
    motors: 2,
    sensors: 1,
    video: "https://www.youtube.com/embed/kfBwBHTfzUM"
  },
  {
    name: "Box Robot",
    platform: "spike",
    motors: 3,
    sensors: 3,
    video: "https://www.youtube.com/embed/QBqDkT-Emiw"
  },
  {
    name: "Shooter Bot",
    platform: "spike",
    motors: 3,
    sensors: 2,
    video: "https://www.youtube.com/embed/Ez3N6vfgdgo"
  },
  {
    name: "ping pong ball collector Robot",
    platform: "ev3",
    motors: 3,
    sensors: 3,
    video: "https://youtu.be/GrLvJvppM8M?si=0pqFGwBB_tzCs915"
  },
  {
    name: "robot invader",
    platform: "ev3",
    motors: 3,
    sensors: 0,
    video: "https://youtu.be/J2LNupdl9gs?si=jejA8o3076oaUIrg"
  },
  {
    name: "Smart Car",
    platform: "spike",
    motors: 4,
    sensors: 3,
    video: "https://www.youtube.com/embed/O9s34Trw7PY"
  },
  {
    name: "Drone Simulator",
    platform: "spike",
    motors: 4,
    sensors: 4,
    video: "https://www.youtube.com/embed/Uz3u4ybwao4"
  },
  {
    name: "robot bowling",
    platform: "ev3",
    motors: 3,
    sensors: 2,
    video: "https://youtu.be/HlTr52KWb_E?si=DbFfGpK2WhLLw1sl"
  },
  {
    name: "Turtle Bot",
    platform: "spike",
    motors: 2,
    sensors: 1,
    video: "https://www.youtube.com/embed/h0d5X1xBpcY"
  },
  {
    name: "robot loader",
    platform: "ev3",
    motors: 3,
    sensors: 3,
    video: "https://youtu.be/dfa4OLYecuU?si=2_jmkUW1H1qzN0wD"
  },
  {
    name: "Maze Solver",
    platform: "spike",
    motors: 3,
    sensors: 2,
    video: "https://www.youtube.com/embed/DLh_hg8tsz4"
  },
  {
    name: "color detecting robot",
    platform: "ev3",
    motors: 2,
    sensors: 2,
    video: "https://youtu.be/MRMxHoXJxmQ?si=Xp_G96-3hqsnYOFQ"
  },
  {
    name: "Lift Arm",
    platform: "spike",
    motors: 3,
    sensors: 3,
    video: "https://www.youtube.com/embed/bZvN9SKMXlQ"
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
