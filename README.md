# severstal-test

<p>🖐️Привет!👋</p>
      <p>Это тестовое задание.</p>
      <p>В соответствии с техническим задание реализованы следующие функции:</p>
      <ul>
        <li>4 страницы - главная, логин, новости, профиль</li>
        <li>На странице новости выводятся - новости🙃</li>
        <li>Хранение данных в виде json-файла</li>
        <li>
          В менеджере состояний хранятся данные с новостями и о текущем юзере
        </li>
        <li>
          Профиль доступен только после аутентификации. В противном случае
          редирект на страницу логина
        </li>
        <li>
          Зарегистрирован единственный пользователь: username: admin, password:
          12345
        </li>
        <li>При вводе некорректных данных пользователя - выдаётся ошибка</li>
      </ul>
      <p>Дополнительный функционал:</p>
      <ul>
        <li>
          Имитация обращений к серверу по средствам сервиса My JSON Server
        </li>
        <li>
          В новостях реализован небольшой интерактив - вперемешку выводятся
          новости из другой вселенной, но часть из них оказывается правдой. У
          пользователя есть возможность испытать интуицию🧐
        </li>
        <li>
          Кнопка "Выхода" для пользователя - чистится localStorage и state
        </li>
      </ul>
      <p>Стек технологий:</p>
      <ul>
        <li>React</li>
        <li>Redux-Saga</li>
        <li>React-Router-Dom</li>
        <li>Bootstrap</li>
        <li>My JSON Server</li>
      </ul>
<b>Для запуска приложения воспользуйтесь следующей командой в терминале:</b>  <br>
<code>cd client && npm run first-start</code>
