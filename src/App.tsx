import "./themes/global.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Container from "./components/Container/Container";
import Active from "./pages/Active";
import All from "./pages/All";
import Completed from "./pages/Completed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo-devchallenges" element={<Container />}>
          <Route index element={<All />} />
          <Route path="/todo-devchallenges/active" element={<Active />} />
          <Route path="/todo-devchallenges/completed" element={<Completed />} />
        </Route>
        <Route path="/" element={<Navigate to="/todo-devchallenges" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
