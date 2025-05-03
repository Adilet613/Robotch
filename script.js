// Обновлённая версия с ИИ-помощником, iframe, фильтром и сохранением темы
const users = {}; // временно хранит данные пользователей (можно заменить на сервер в будущем)

// Сохраняем тему в localStorage
const themeToggle = document.getElementById('toggleTheme');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
}

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

// ИИ-помощник: простой совет по выбору робота
function getRobotHint(large, medium, color, touch, ultra) {
  if (ultra > 0 && large + medium >= 3) return 'Совет: попробуй собрать марсохода или исследовательского дрона!';
  if (color > 0 && medium >= 2) return 'Совет: попробуй цветовой сортировщик или робота-художника!';
  if (large >= 2 && touch >= 1) return 'Совет: можно сделать робота для следования по линии или манипулятора.';
  return 'Совет: добавь ещё деталей, чтобы открыть больше возможностей!';
}

document.getElementById('partsForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const large = parseInt(document.getElementById('largeMotors').value || 0);
  const medium = parseInt(document.getElementById('mediumMotors').value || 0);
  const touch = parseInt(document.getElementById('touchSensors').value || 0);
  const color = parseInt(document.getElementById('colorSensors').value || 0);
  const ultra = parseInt(document.getElementById('ultrasonicSensors').value || 0);
  const brain = document.getElementById('brainType').value;
  const type = document.getElementById('robotType').value;

  let results = 'Подходящие роботы:\n';

  if (brain === 'ev3' && large >= 2 && touch >= 1 && (type === 'any' || type === 'соревновательные')) {
    results += '- ЛинияСледователь EV3 (видео: https://www.youtube.com/embed/example1)\n';
  }
  if (brain === 'spike' && medium >= 2 && color >= 1 && (type === 'any' || type === 'обучающие')) {
    results += '- Сортировщик по цвету Spike (видео: https://www.youtube.com/embed/example2)\n';
  }
  if (large + medium >= 3 && ultra >= 1 && (type === 'any' || type === 'исследовательские')) {
    results += '- Умный марсоход (видео: https://www.youtube.com/embed/example3)\n';
  }

  const hint = getRobotHint(large, medium, color, touch, ultra);

  if (results === 'Подходящие роботы:\n') {
    results = 'К сожалению, роботов с такими параметрами пока нет.';
  }

  document.getElementById('robotResults').textContent = results + '\n' + hint;

  // Пример iframe
  const iframe = document.createElement('iframe');
  iframe.width = '100%';
  iframe.height = '315';
  iframe.src = 'https://www.youtube.com/embed/example1';
  iframe.title = 'Инструкция по роботу';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  document.getElementById('robotResults').appendChild(iframe);
});
