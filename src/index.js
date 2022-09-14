import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"



import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
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
    <Home />
    </>
  );
}
