import React from "react";

import Estimate from "../Components/Estimate.js"
import ManualEstimate from "../Components/ManualEstimate"

const MainPage = () => {
  return (
    <div id="container">
      <main>
        <Estimate />
        <ManualEstimate />
      </main>
    </div>
  );
};
export default MainPage;
