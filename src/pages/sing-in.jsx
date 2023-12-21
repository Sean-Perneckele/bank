import '../designs/css/main.css'
 import InputWrapper from '../compossant/Input Warpper.jsx';
 import { Link } from 'react-router-dom';



function SingIn() {
  return (
   
    <main className="main bg-dark">
      <div className='sing-in-div bg-dark'>
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <InputWrapper fore="username" titre="Username" type="text" id="Username" />
          <InputWrapper fore="password" titre="Password" type="password" id="password" />

          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
          <Link to='/user' className="sign-in-button">Sign In</Link>
          {/* <!-- SHOULD BE THE BUTTON BELOW -->
            <!-- <button class="sign-in-button">Sign In</button> -->
            <!--  --> */}
        </form>
      </section>
      </div>
    </main>
    
  );
}

export default SingIn