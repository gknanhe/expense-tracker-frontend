import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts";
import styled from "styled-components";
import Orb from "./components/Orb/Orb";
import Navigation from "./components/Navigation/Navigation";
import { useContext, useEffect, useMemo, useState } from "react";
import Dashboard from "./components/DashBoard/Dashboard";
import { Navigate, Route, Routes } from "react-router-dom";
import Incomes from "./components/Incomes/Incomes";
import Expenses from "./components/Expenses/Expenses";
import { Toaster } from "react-hot-toast";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useAuthContext } from "./context/AuthContext";
import { useTokenStore } from "./store/useTokens";

function App() {
  const [active, setActive] = useState(1);
  const { authUser } = useAuthContext();
  // console.log(authUser);
  const { token, setToken } = useTokenStore();

  useEffect(() => {
    const retrievedToken = localStorage.getItem("finance-token");
    if (retrievedToken) {
      setToken(retrievedToken);
      // console.log("token", retrievedToken);
    }
  }, []);

  console.log(token);

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <AppStyled bg={bg} className="App">
      <orbMemo />
      <MainLayout>
        {/* <Navigation active={active} setActive={setActive} />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/incomes" element={<Incomes />} />
            <Route path="/expenses" element={<Expenses />} />
          </Routes>
        </main> */}
        {authUser && <Navigation active={active} setActive={setActive} />}
        <main>
          <Routes>
            <Route
              path="/"
              element={authUser ? <Dashboard /> : <Navigate to="/signin" />}
            />
            <Route
              path="/incomes"
              element={authUser ? <Incomes /> : <Navigate to="/signin" />}
            />
            <Route
              path="/expenses"
              element={authUser ? <Expenses /> : <Navigate to="/signin" />}
            />
            <Route
              path="/signup"
              element={authUser ? <Navigate to="/" /> : <Signup />}
            />{" "}
            {/* Render Signup component */}
            <Route
              path="/signin"
              element={authUser ? <Navigate to="/" /> : <Login />}
            />{" "}
            {/* Render Signin component */}
          </Routes>
        </main>
      </MainLayout>
      <Toaster />
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
