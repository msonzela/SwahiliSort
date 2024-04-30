<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SwahiliSort</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    <!-- <header>
        <div class="header-container">
            <div class="logo">
                <div class="menu-icon">
                    &#9776;
                </div>
                
                <h1>SwahiliSort</h1>
            </div>
            <div class="logo">
                <span>&#128172;</span>
                <span>Q&A</span>
                <span>FAQ</span>
                <span>&#63;</span>
            </div>
            <div class="profile-icon">
                <span> &#128100;</span>
            </div>
        </div>
    </header> -->

    <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div class="col-md-3 mb-2 mb-md-0">
            <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
              <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
            </a>
          </div>
    
          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
            <li><a href="#" class="nav-link px-2">Features</a></li>
            <li><a href="#" class="nav-link px-2">Pricing</a></li>
            <li><a href="#" class="nav-link px-2">FAQs</a></li>
            <li><a href="#" class="nav-link px-2">About</a></li>
          </ul>
    
          <div class="col-md-3 text-end">
            <button type="button" class="btn btn-outline-primary me-2">Login</button>
            <button type="button" class="btn btn-primary">Sign-up</button>
          </div>
        </header>
      </div>

    <div class="container">
        <input type="text" id="questionInput" class="large-input" placeholder=" &#128100; Type your question here...">
        <div id="response"></div>
    </div>
     <div>
        <button class="ask-button" onclick="askQuestion()">Ask</button>
     </div>
     <div>
        <button class="login-as-admin">Login as Admin</button>
     </div>
    <footer>
        <p>&copy; 2024 SwahiliSort. All rights reserved.</p>
    </footer>

    <!-- <script src="script.js"></script> -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
     integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>




html, body {
    height: 100%;
    margin: 0;
}
body {
    display: flex;
    /* gap: 20px; */
    flex-direction: column;
}
.container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 380px;
}
header {
    background-color:   #068f94; 
    color: #fff; 
    padding: 15px;
    text-align: center;
}

.header-container {
    display: flex;
    /* gap: 10rem; */
    justify-content: space-between; 
    align-items: center;
}
.logo {
    display: flex;
    align-items: center;
    margin-left: 0.5%;
    font-size: x-large;
}
.logo img {
    width: 30px;
    height: auto;
    margin-right: 0px;
}
.logo span {
    margin-left: 10px; /* Add some spacing between icon and text */
}
h1 {
    margin: 0px;
    margin-left: 25px;
    font-size: x-large;
}

footer {
    background-color:    #f6fdfd;  
    color: #0a0707; /* White text color */
    padding: 3px;
    text-align: center;
}
.logo:nth-child(2),
.logo:nth-child(3) {
    flex: 1; /* Distribute remaining space between Q&A and FAQ */
    justify-content: center; /* Align Q&A and FAQ at the center horizontally */
    margin-right: 300px; 
    
}
.ask-button {
    margin-left: 90%; 
    margin-bottom: 70px; 
    width: 56px; 
    height: 56px;
    border-radius: 50%; 
    background-color: #0047ab; 
    color: #fff; 
    border: none;
    cursor: pointer;
    font-size: 20px;
}
.menu-icon {
    font-size: 25px; 
}
.profile-icon {
    margin-left: auto;
    margin-right: 20px; 
}
.large-input {
    width: 40%;
    height: 50%;
    font-size: 20px;
    border-radius: 20px;
}