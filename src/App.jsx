import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './compnents/Header';
import Homepagecon from './compnents/Homepagecon';
import Features from './compnents/Features';
import Footer from './compnents/Footer';
import RegisterForm from './compnents/RegisterForm';
import LoginForm from './compnents/LoginForm';
import Dashboard from './compnents/Dashboard';
import Trialplaypage from './compnents/Trialplaypage';
import Planpage from './compnents/Planpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Homepagecon/>
        <Features />
        <Footer />
      </>
    ),
  },
  {
    path: "/register",
    element: <RegisterForm />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/trialplaypage",
    element: <Trialplaypage />,
  },
  {
    path: "/plans",
    element: <Planpage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
