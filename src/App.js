import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home}/>
    </Routes>
  );
}

export default App;
