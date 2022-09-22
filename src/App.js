import logo from './logo.svg';
import './App.css';
import ToDoList from './component/toDoList/ToDoList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";


import Navigation from './component/custom/Navigation/Nav';
import HomeConponent from "./component/home/HomeConponent";
import About from './component/about/About';
import DetailUser from './component/User/Detail';
import User from './component/User/User';
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <ToastContainer
          position="top-right"
          autoClose={500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Routes>
          <Route element={<HomeConponent />} path="/" />
          <Route element={<ToDoList />} path="/todo" />
          <Route element={<About />} path="/about" />
          <Route element={<User />} path="/user" />
          <Route element={<DetailUser />} path="/user/:id" />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
