import { HashRouter, Route, Routes } from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Purchases from "./pages/Purchases";
import Signup from "./pages/Signup";
import User from "./pages/User";
import NavBarApp from "./components/NavBarApp";
import LoadingScreen from "./components/LoadingScreen";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <>
      <HashRouter>
        <NavBarApp />
        {isLoading && <LoadingScreen />}
        <Container className="my-5">
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/product/:id" element={<ProductDetail />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user" element={<User />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/purchases" element={<Purchases/>} />
            </Route>
          </Routes>
        </Container>
      </HashRouter>
    </>
  );
}

export default App;
