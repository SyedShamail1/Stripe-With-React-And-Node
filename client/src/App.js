import "./App.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Pay from "./Pages/Pay";
import Success from "./Pages/Success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pay />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
