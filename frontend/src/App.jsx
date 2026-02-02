import { useState } from "react";
import JoinRoomForm from "./pages/Home/JoinRoomForm";

const App = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [joined, setJoined] = useState(false);
  return (
    <div>
      {
        !joined ? (<JoinRoomForm></JoinRoomForm>) : (
          <div>Chat Room Component Placeholder</div>
        )
      }
    </div>
  );
};

export default App;