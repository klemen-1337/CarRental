import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import HomePage from "containers/HomePage";
import DashboardPage from "containers/DashboardPage";
import LoginPage from "containers/LoginPage";
import RegisterPage from "containers/RegisterPage";
import NotFoundPage from "containers/404";

import { store } from 'store';


const app = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/dashboard" element={<DashboardPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="*" element={ <NotFoundPage /> }></Route>
      </Routes>
    </Router>
  </Provider>
);

export default app