import "./App.css";
import Allapp from "./Allapp";
import ReactPlayer from "react-player";
import Calc from "./Calculator App/Calc";
import GoalApp from "./GoalApp/GoalApp";

function App() {
  return (
    <div className="h-full">
      {/* <Allapp />
      <ReactPlayer
        url={"https://www.twitch.tv/lolybntgamer"}
        controls={true}
        width={300}
        height={200}
        volume={0}
      /> */}
      {/* <Calc /> */}
      <GoalApp />
    </div>
  );
}

export default App;
