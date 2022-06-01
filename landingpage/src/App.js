import Contest from "./components/contest";
import RegularActivities from "./components/Regular-activities";
import OurVision from "./components/Our-vision";
import OurMission from "./components/Our-Mission";
import New from "./components/new";
import Contact from "./components/contact";
import Welcome from "./components/welcome"
import WhatWeDo from "./components/What-we-do";
function App() {
  return (
    <div className="App w-screen">
      <Welcome/>
      <WhatWeDo/>
      <OurVision />
      <OurMission/>
      <Contest/>
      <RegularActivities/>
      <New/>
      <Contact/>
    </div>
  );
}
export default App;
