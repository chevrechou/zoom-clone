import logo from "./logo.svg";
import "./App.css";
import { Input, InputLabel, Button } from "@material-ui/core";

function App() {
  return (
    <div className="container">
      <div className="video-player-container"></div>
      <div className="meeting-information-container">
        <div>
          <InputLabel htmlFor="name-input-field"> Name: </InputLabel>
          <Input id="name-input-field" />
        </div>
        <div>
          <InputLabel htmlFor="meetingID-input-field"> Meeting ID: </InputLabel>
          <Input id="meetingID-input-field" />
        </div>
        <Button variant="contained" color="secondary">
          Call
        </Button>
      </div>
    </div>
  );
}

export default App;
