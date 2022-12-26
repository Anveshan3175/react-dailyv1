import { Route, Routes } from "react-router-dom";
import SampleButton from "./sample-button";
import SampleInputText from "./sample-textbox";
import Home from "./../Home";

function SampleRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sampleButton" element={<SampleButton />} />
      <Route path="/sampleInputText" element={<SampleInputText />} />
    </Routes>
  );
}

export default SampleRoutes;
