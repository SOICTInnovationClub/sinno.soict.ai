import Contest from "./components/contest";
import RegularActivities from "./components/Regular-activities";
import OurVision from "./components/Our-vision";
import Welcome from "./components/welcome"
import WhatWeDo from "./components/What-we-do";
function App() {
  return (
    <div className="App">
      <Welcome/>
      <WhatWeDo/>
      <OurVision/>
      <Contest/>
      <RegularActivities/>

    </div>
  );
}

export default App;
