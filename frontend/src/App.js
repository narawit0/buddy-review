import React from 'react';
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Reservation from "./pages/Reservation";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import NoAuthLayout from "./layouts/NoAuthLayout";
import Navbar from "./components/Navbar";
import ReservationLogs from "./pages/ReservationLog";

function App() {
  return (
      <MainLayout>
          <Navbar />
          <Routes>
              <Route element={<NoAuthLayout />}>
                  <Route path="/" element={<Home />}/>
                  <Route path="/login" element={<Login />} />
              </Route>
              <Route element={<AuthLayout />}>
                  <Route path="/reservation" element={<Reservation />} />
                  <Route path="/reservation/logs" element={<ReservationLogs />} />
              </Route>
          </Routes>
      </MainLayout>
  );
}

export default App;
