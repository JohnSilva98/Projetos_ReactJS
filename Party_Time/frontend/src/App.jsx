import { Outlet } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
// components
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
