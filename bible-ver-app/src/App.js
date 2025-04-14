

function App() {
  return (
    <>
      <div>
        <h2>Daily Encouragement</h2>
        <h4>Login</h4>
        <form>
                <label>Username: </label><input type="text" placeholder="* username" maxLength={25}></input><br/>
                <label>Password: </label><input type="password" placeholder="* password" maxLength={25}></input>
                <p></p>
                <button>Login</button>
            </form>
      </div>
    </>
  );
}

export default App;
