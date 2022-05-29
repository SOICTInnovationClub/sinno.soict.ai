import Contest from "./components/contest";
import RegularActivities from "./components/Regular-activities";
import OurVision from "./components/Our-vision";
import Welcome from "./components/welcome"
function App() {
  return (
    <div className="App">
      <Welcome/>
      <OurVision/>
      <Contest/>
      <RegularActivities/>

    </div>
  );
}

export default App;
