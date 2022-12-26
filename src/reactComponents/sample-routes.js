import { Route, Routes } from "react-router-dom";
import SampleButton from "./sample-button";
import SampleInputText from "./sample-textbox";
import Home from "./../Home";
import SampleSection from "./sample-section";

function SampleRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sampleButton" element={<SampleButton />} />
      <Route path="/sampleInputText" element={<SampleInputText />} />
      <Route path="/sampleSection" element={<SampleSection />} />
    </Routes>
  );
}

export default SampleRoutes;
