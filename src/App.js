import { useContext } from "react";
import { ContextAPI } from "./component/Context";
import List from "./component/List";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const { baseURL } = useContext(ContextAPI);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/list/:coin" element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;
