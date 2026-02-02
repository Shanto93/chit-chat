import { useState } from 'react';

const ChatRoom = ({ user, onLeave }) => {
    const [message, setMessage] = useState("");
    const [chatLog, setChatLog] = useState([]);

    const sendChat = (e) => {
        e.preventDefault();
        if (!message) return;

        setChatLog([...chatLog, { user: user.name, text: message }]);
        setMessage("");
    };

    return (
        <div className="max-w-2xl mx-auto h-screen flex flex-col p-4">
            <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between">
                <span>Room: <strong>{user.roomId}</strong></span>
                <button onClick={onLeave} className="text-sm underline">Leave</button>
            </div>

            <div className="flex-1 bg-white border-x p-4 overflow-y-auto">
                {chatLog.map((msg, i) => (
                    <div key={i} className={`mb-2 ${msg.user === user.name ? "text-right" : "text-left"}`}>
                        <span className="text-xs text-gray-400 block">{msg.user}</span>
                        <span className={`inline-block p-2 rounded-lg ${msg.user === user.name ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
                            {msg.text}
                        </span>
                    </div>
                ))}
            </div>

            <form onSubmit={sendChat} className="flex border-t p-2 bg-gray-50 rounded-b-lg">
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 p-2 border rounded-l-lg outline-none"
                    placeholder="Say something..."
                />
                <button className="bg-blue-600 text-white px-6 rounded-r-lg">Send</button>
            </form>
        </div>
    );
};

export default ChatRoom;