import logo from '../../logo.svg';
import './Nav.css';

function Nav() {
  return (
    <div className="Nav">
      <head>
        <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/navbars/"/>
      </head>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">RestOO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03"
                  aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample03">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown03" data-bs-toggle="dropdown"
                   aria-expanded="false">Dropdown</a>
                <ul className="dropdown-menu" aria-labelledby="dropdown03">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="link-secondary" href="#" aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
                     stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3" role="img"
                     viewBox="0 0 24 24"><title>Search</title>
                  <circle cx="10.5" cy="10.5" r="7.5"/>
                  <path d="M21 21l-5.2-5.2"/>
                </svg>
              </a>
              <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
            </div>
          </div>
        </div>
      </nav>
    </div>

  );
      }

export default Nav;
