import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import "./index.css";
import ProductsPage from "./pages/ProductsListPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
import PrintPage from "./pages/PrintPage";
import AuthProvider from "./hooks/AuthProvider";
import PrivateRoute from "./router/route";
import ProfilePage from "./pages/ProfilePage";
import FavoritePage from "./pages/FavoritesPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            {/* <Route element={<PrivateRoute />}> */}
              <Route path="/" element={<HomePage />} />
              <Route path="/products/:category" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/print" element={<PrintPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/favorite" element={<FavoritePage />} />
              <Route path="*" element={<NotFound />} />
            {/* </Route> */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
