import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import "./index.css";
import Error404 from "./pages/Error404"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  );
}
