import img from "../src/assets/img/backRegister.jpg";
import GlobalStyle from "./styles/global";
import { Router } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Hud:token"));
    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Router
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        data={data}
        setData={setData}
      />
    </>
  );
}

export default App;
