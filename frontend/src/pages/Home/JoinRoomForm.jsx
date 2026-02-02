import { useState } from "react";

const JoinRoomForm = ({ onJoin }) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && room) {
            onJoin({ name, roomId: room });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="p-8 bg-white shadow-lg rounded-2xl">
                <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    className="block border p-2 mb-4 rounded"
                />
                <input
                    type="text"
                    placeholder="Room ID"
                    onChange={(e) => setRoom(e.target.value)}
                    className="block border p-2 mb-4 rounded"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Join Room
                </button>
            </form>
        </div>
    );
};

export default JoinRoomForm;