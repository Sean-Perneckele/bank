import '../designs/css/main.css'
 import Account from '../compossant/account.jsx'

function User () {
    return (
        <main className="main bg-dark">
              <div className='bank'>
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
    

      <Account titre="Argent Bank Checking (x8349)"
             montant="$2,082.79" description="Available Balance" />

      <Account titre="Argent Bank savings (x6712)"
             montant="$10,928.42" description="Available Balance" />
      

      <Account titre="Argent Bank credit Card (x8349)"
             montant="$184.30" description="Current Balance" /> 
      </div>
    </main>
    )
}

export default User