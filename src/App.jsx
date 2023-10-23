import HomePage from "./Components/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />}></Route>
    </Routes>
  );
};

export default App;
