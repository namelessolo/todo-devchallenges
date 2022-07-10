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
        <Route path="/" element={<Container />}>
          <Route index element={<All />} />
          <Route path="active" element={<Active />} />
          <Route path="completed" element={<Completed />} />
          <Route path="todo-devchallenges" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
