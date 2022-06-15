import "./App.css";
import logo from "./Assests/logo.png";
import Password from "./Components/Password";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <img
        src={logo}
        alt="Logo"
        style={{ width: "50px", height: "50px", marginTop: "25px" }}
      />
      <h1 style={{ marginTop: "-10px" }}>Password Generator</h1>

      <Password />

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
