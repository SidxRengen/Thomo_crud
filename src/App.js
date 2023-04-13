import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./components/Data";
import Add from "./components/Add";
import Update from "./components/Update";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Data />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
