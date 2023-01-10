import './App.css'
function App() {
  return (

    <html lang ="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
      </head>
      <body>
      <div class="App">
          <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <a class="navbar-brand ms-3 pt-2 pb-2" href="./App.js" alt='TsniperLogo'>
              <div class="logo-image ">
                    <img src={require('./Tsniper.png')} class="img-fluid"/>
              </div>
             </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                  <li class="nav-item active">
                      <a class="nav-link pe-5" href="./App.js">Home</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link pe-2" href="#">About Us</a>
                  </li>
                  <li class="nav-item col-sm-6">
                      <a class="nav-link" href="#">Donate</a>
                  </li>
                  </ul>
              </div>
          </nav>
        </div>
      </body>

    </html>

  );
}

export default App;
