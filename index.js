const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form action="/login" method="post">
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  `);
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'user@example.com' && password === 'password') {
    res.send('Welcome!');
  } else {
    res.send('Invalid email or password');
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
