import Contest from "./components/contest";
import RegularActivities from "./components/Regular-activities";
import OurVision from "./components/Our-vision";
import New from "./components/new";
import Contact from "./components/contact";
// import Goo from "./components/banner";

function App() {
  return (
    <div className="App">
        {/* <Goo/> */}
        <OurVision/>
        <Contest/>
        <RegularActivities/>
        <New/>
        <Contact/>
    </div>
  );
}
export default App;
