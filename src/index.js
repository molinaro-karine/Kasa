import React from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Location from "./pages/Location"
import Home from "./pages/Home"
import About from "./pages/About"
import "./index.css";
import Error404 from "./pages/Error404"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Location/:id" element={<Location />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
 
);


