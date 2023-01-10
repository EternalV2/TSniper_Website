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
            <a class="navbar-brand ms-3 pt-2 pb-2" href="https://discord.gg/hFKgkMtwz7" alt='TsniperLogo' target="_blank">
              <div class="logo-image ">
                <a href="https://discord.gg/hFKgkMtwz7"  rel="noopener noreferrer" target="_blank">
                  <img src={require('./Tsniper.png')} class="img-fluid" />
                </a>             
              </div>
             </a>
              <button class="navbar-toggler me-5" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                  <div class = "col-lg-6" >
                  <li class="nav-item active">
                      <a class="primary_nav_info nav-link pe-5" href="./App.js">Home</a>
                  </li>
                  </div>
                  <div class  = " secondary_nav_info col-lg-10 d-flex offset-lg-10">
                  <li class="nav-item">
                      <a class="nav-link pe-5" href="#">About</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Donate</a>
                  </li>
              </div>
         
                  </ul>
              </div>
          </nav>
        </div>
      </body>

    </html>

  );
}

export default App;
