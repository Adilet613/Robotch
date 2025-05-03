// Простая система регистрации и входа с использованием bcryptjs

const users = {}; // временно хранит данные пользователей (можно заменить на сервер в будущем)

document.getElementById('registerForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const username = document.getElementById('regUsername').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value;

  if (users[email]) {
    document.getElementById('registerMsg').textContent = 'Пользователь уже существует.';
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users[email] = { username, password: hashedPassword };
  document.getElementById('registerMsg').textContent = 'Успешная регистрация!';
});

document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const user = users[email];

  if (!user) {
    document.getElementById('loginMsg').textContent = 'Пользователь не найден.';
    return;
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    document.getElementById('loginMsg').textContent = `Добро пожаловать, ${user.username}!`;
  } else {
    document.getElementById('loginMsg').textContent = 'Неверный пароль.';
  }
});

document.getElementById('partsForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const large = parseInt(document.getElementById('largeMotors').value || 0);
  const medium = parseInt(document.getElementById('mediumMotors').value || 0);
  const touch = parseInt(document.getElementById('touchSensors').value || 0);
  const color = parseInt(document.getElementById('colorSensors').value || 0);
  const ultra = parseInt(document.getElementById('ultrasonicSensors').value || 0);
  const brain = document.getElementById('brainType').value;

  let results = 'Подходящие роботы:\n';

  if (brain === 'ev3' && large >= 2 && touch >= 1) {
    results += '- ЛинияСледователь EV3 (видео: https://youtu.be/example1)\n';
  }
  if (brain === 'spike' && medium >= 2 && color >= 1) {
    results += '- Сортировщик по цвету Spike (видео: https://youtu.be/example2)\n';
  }
  if (large + medium >= 3 && ultra >= 1) {
    results += '- Умный марсоход (видео: https://youtu.be/example3)\n';
  }

  if (results === 'Подходящие роботы:\n') {
    results = 'К сожалению, роботов с такими параметрами пока нет.';
  }

  document.getElementById('robotResults').textContent = results;
});
