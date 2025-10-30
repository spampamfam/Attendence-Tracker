import logo from "/icons/logo.svg";

function Login() {
  return (
    <div className="background">
      <div className="overlay">
        <div className="w-120 h-130 bg-white rounded-xl">
          <header className="relative top-10  text-center mb-15">
            <img src={logo} className="mx-auto h-15 w-15" />
            <h1 className="text-2xl bold">Attendance Tracker</h1>
          </header>
          <form className="relative w-full h-auto bg-white rounded-xl">
            <input
              type="email"
              name="email"
              id="emailField"
              className="peer w-full h-10  
                 transition-all border-2 rounded-md p-2 text-black focus:outline-none
                  "
            />
            <label
              htmlFor="emailField"
              className="absolute left-2 top-2 transition-all duration-200 
               peer-focus:-translate-y-8 peer-focus:text-sm peer-focus:text-black"
            >
              Email
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
