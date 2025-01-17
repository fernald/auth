import { Link } from "react-router-dom";






const Navbar = () => {

   
    
    const handleClick = () => {
       
        document.getElementById('signindiv').hidden=false
        document.getElementById('signupdiv').hidden=true

     

    };
    const handleClick1 = () => {
       
        document.getElementById('signindiv').hidden=true
        document.getElementById('signupdiv').hidden=false

     

    };

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            ClickPray
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Login"
                >
                  Login
                </Link>
              </li> */}
              <li className="nav-item"></li>
            </ul>
            <div id="signupdiv">
              <Link id="swaplink" className="nav-link" to="/Signup">
                <button
                  id="Swapbtn"
                  className="btn btn-outline-success"
                  type="button"
                  onClick={handleClick}
                >
                  Sign Up
                </button>
              </Link>
            </div>

            <div id="signindiv" hidden>
              <Link id="swaplink" className="nav-link" to="/Login">
                <button
                  id="Swapbtn"
                  className="btn btn-outline-success"
                  type="button"
                  onClick={handleClick1}
                >
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  export default Navbar;