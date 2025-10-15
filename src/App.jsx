import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, useState, useEffect, lazy } from "react";

import { ToastContainer } from "react-toastify";
import "./App.css";

// PAges
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const LoadingPage = lazy(() => import("./pages/LoadingPage"));
const LoginForm = lazy(() => import("./pages/LoginForm/LoginForm"));
const RegisterPage = lazy(() => import("./pages/LoginForm/RegisterPage"));
const WishlistPage = lazy(() => import("./pages/WishlistPage"));
const CardPage = lazy(() => import("./pages/CardPage"));
const CheckOutPage = lazy(() => import("./pages/CheckOutPage"));
const AccountPage = lazy(() => import("./pages/AccountPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const Layout = lazy(() => import("./layout"));


function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return (
    <Suspense fallback={<LoadingPage />}>
      <ToastContainer />

      <Routes>
        <Route
          path="/login"
          element={
            loggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <LoginForm setLoggedIn={setLoggedIn} />
            )
          }
        />

        <Route
          path="/register"
          element={loggedIn ? <Navigate to="/" replace /> : <RegisterPage />}
        />

        <Route
          path="/"
          element={
            loggedIn ? (
              <Layout onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        >
          <Route index element={<HomePage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="card" element={<CardPage />} />
          <Route path="checkout" element={<CheckOutPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

