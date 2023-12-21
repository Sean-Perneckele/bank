
import '../designs/css/main.css'
 import { Link } from 'react-router-dom';
 import logo from '../designs/img/argentBankLogo.png'

function Header() {
  return (
  <header>

    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className='main-nav-logo-image'
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to='/singIn'>
          <i className="fa fa-user-circle"></i>
            <span>  Sign In  </span>
        </Link>
      </div>

      
      {/* <div>
        <a className="main-nav-item" href="./user.html">
          <i className="fa fa-user-circle"></i>
          Tony
        </a>
        <a className="main-nav-item" href="./index.html">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </a>
      </div> */}
   

    </nav>
    </header>
  )
}

export default Header
