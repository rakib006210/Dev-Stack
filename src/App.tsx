import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

         
          <div className="logo">
            <div className="logo-icon">DS</div>
            <span>Dev Stack</span>
          </div>

         
          <div className="nav-links">
            <a href="#" className="active">Home</a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          
          <div className="nav-right">
            <a href="#" className="sign-in">Sign In</a>
            <button className="sign-up">Sign Up</button>
          </div>

        </div>
      </nav>

     
      <main className="main-content">
        <h1>Dev Stack</h1>
        <p>Your website content will come here.</p>

        
        <div className="dummy-content">
          <h2>Scroll Down</h2>
          <p>
            This is temporary content. You can add your website sections here.
          </p>
          <p>
            Keep scrolling to check that the navbar stays at the top.
          </p>
          <p>
            More content goes here...
          </p>
        </div>
      </main>
    </>
  );
}

export default App;