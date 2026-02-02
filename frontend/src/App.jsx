import { useState } from "react";
import JoinRoomForm from "./pages/Home/JoinRoomForm";
import ChatRoom from "./pages/Home/ChatRoom";


const App = () => {
  const [joined, setJoined] = useState(false);
  const [user, setUser] = useState({ name: "", roomId: "" });

  const handleJoinSuccess = (data) => {
    setUser(data);
    setJoined(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {
        !joined ? (
          <JoinRoomForm onJoin={handleJoinSuccess} />
        ) : (
          <ChatRoom user={user} onLeave={() => setJoined(false)} />
        )
      }
    </div>
  );
};

export default App;