import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Diario from "./pages/Diario";
import Respiracao from "./pages/Respiracao";
import Estudos from "./pages/Estudos";

function App() {
  return (
    <div className="app">
      <div className="card">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/chat" element={<Chat />} />

          <Route path="/diario" element={<Diario />} />

          <Route path="/respiracao" element={<Respiracao />} />

          <Route path="/estudos" element={<Estudos />} />

        </Routes>

      </div>
    </div>
  );
}

export default App;