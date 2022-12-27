import { Route, Routes } from "react-router-dom";
import SampleButton from "./sample-button";
import SampleInputText from "./sample-textbox";
import Home from "./../Home";
import SampleSection from "./sample-section";
import SampleStringsList from "./sample-list-strings";
import SampleObjectsList from "./sample-list-objects";
import SampleObjectsDetailsList from "./sample-list-objects-details";
import SampleObjectsDetailsFilter from "./sample-list-objects-filters";

function SampleRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sampleButton" element={<SampleButton />} />
      <Route path="/sampleInputText" element={<SampleInputText />} />
      <Route path="/sampleSection" element={<SampleSection />} />
      <Route path="/sampleStringsList" element={<SampleStringsList />} />
      <Route path="/sampleObjectsList" element={<SampleObjectsList />} />
      <Route
        path="/sampleObjectsDetailsList"
        element={<SampleObjectsDetailsList />}
      />
      <Route
        path="/sampleObjectsFilterList"
        element={<SampleObjectsDetailsFilter />}
      />
    </Routes>
  );
}

export default SampleRoutes;
