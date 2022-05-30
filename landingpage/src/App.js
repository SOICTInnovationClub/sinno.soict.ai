import Contest from "./components/contest";
import RegularActivities from "./components/Regular-activities";
import OurVision from "./components/Our-vision";
import OurMission from "./components/Our-Mission";

function App() {
  return (
    <div className="App">
      <OurVision />
      <OurMission/>
      <Contest/>
      <RegularActivities/>
    </div>
  );
}

export default App;
