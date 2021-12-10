<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Group Project</title>
    <link rel="stylesheet" href="styles.css" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
      integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <nav class="navbar">
      <div class="navbar__container">
        <a href="index.html" id="navbar__logo"><i class="fas fa-gem"></i>MoneyCorp</a>
        <div class="navbar__toggle" id="mobile-menu">
          <span class="bar"></span> <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <ul class="navbar__menu">
          <li class="navbar__item">
            <a href="index.html" class="navbar__links">Home</a>
          </li>
          <li class="navbar__item">
            <a href="budgetapp.html" class="navbar__links">Budget app</a>
          </li>
          <li class="navbar__btn">
            <a href="login.html" class="button">Join Our Community</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="main">
      <div class="main__container">
        <div class="main__content">
          <h1>Budgeting App</h1>
          <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <title>Expense Tracker</title>
  </head>
  <body>
    <h2>Expense Tracker</h2>

    <div class="container">
      <h4>Your Balance</h4>
      <h1 id="balance">$0.00</h1>

      <div class="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" class="money plus">+$0.00</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" class="money minus">-$0.00</p>
        </div>
      </div>

      <h3>History</h3>
      <ul id="list" class="list">
      </ul>

      <h3>Add name of Transaction</h3>
      <form id="form">
        <div class="form-control">
          <label for="text">(By Month, date, etc)</label>
          <input type="text" id="text" placeholder="Enter text..." />
        </div>
        <div class="form-control">
          <label for="amount"
            >Input Amount <br />
            (negative for expense, positive for income)</label>
          <input type="number" id="amount" placeholder="Enter amount..." />
        </div>
        <button class="btn">Add transaction</button>
      </form>
    </div>

    <script src="budgetapp.js"></script>
  </body>
</html>
        </div>
      </div>
    </div>

    <script src="app.js"></script>
  </body>
</html>
