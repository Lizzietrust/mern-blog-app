import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Nav from "./components/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import PrivateRoutes from "./components/PrivateRoutes";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();

  const privateRoutes = ["/dashboard", "/posts", "/profile"];

  const isPrivateRoute = privateRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      <ToastContainer />
      {!isPrivateRoute && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<PrivateRoutes />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/posts" element={<PrivateRoutes />}>
          <Route index element={<Posts />} />
        </Route>
        <Route path="/profile" element={<PrivateRoutes />}>
          <Route index element={<Profile />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      {!isPrivateRoute && <Footer />}
    </>
  );
}

export default App;
