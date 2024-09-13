import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { moviesData } from "./utils/moviesData";
import LinkDes from "./pages/LinkDes";
import AppSub from "./pages/AppSub";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppSub />} />
        <Route
          path="/movie/:id"
          element={<LinkDes movies={moviesData} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
